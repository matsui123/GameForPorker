import React, { useState, useMemo, useRef } from 'react';
import ALLCARDS, { AllCardsType, ANSWER, AnswerRank } from '../methods/createCards';
import {ModalWrapper} from '../atoms/modalWrapper';
import * as MSC from '../styled-components/prifloModalStyled';
import { AllAnswerButton } from '../module/allAnswerButton';
import { EndAllCard } from '../module/endAllCard';

export type ModalProps = {
    modalIsOpen: boolean,
    closeModal: () => void,
    clickedCard?: string,
}

const CORRECT = "正解";
const WRONG = "不正解";

export const PriFloModal: React.FC<ModalProps> = React.memo(({modalIsOpen, closeModal, clickedCard}) => {

    //全レンジ格納
    const [cards , setCards] = useState<AllCardsType[]>([]);
    //間違ったレンジ格納
    const [wrongAns, setWrongAns] = useState<AllCardsType[]>([]);
    //乱数格納
    const [random, setRandom] = useState<number>(0);
    //ボタン表示フラグ
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    useMemo(() => {
        if(!!clickedCard){
            console.log(clickedCard);
            const selectedCard = ALLCARDS.filter((card: AllCardsType) => card.card.includes(clickedCard));
            setCards([...selectedCard]);
        }else{
            console.log("何も選択されてない")
            setCards([...ALLCARDS]);
        }
    },[clickedCard, ALLCARDS]);

    //カード取得
    //useMemo(() => setCards([...ALLCARDS]),[ALLCARDS]);

    //cards情報更新用メソッド
    const updateCards = (prop: AllCardsType[]) => setCards([...prop]);

    //臨時
    const [correct, setCorrect] = useState<string>("");

    //メソッド分割してもいいかも
    const next = (answerRank: number) => {
        //回答判定
        //正解
        const correctRank = cards[random].rank;
        //回答判断
        const ans = correctRank === answerRank ? CORRECT : WRONG;
        //正解のランクと人数
        const num = AnswerRank.filter(ar => ar.rank === correctRank)[0];
        const correct = `${ans} ${num.answer}`;
        setCorrect(correct);
        //間違った回答保存
        if(ans === WRONG) setWrongAns(wrong => [...wrong, cards[random]]);

        //TODO: 0.5秒だけ正解のボタンの枠を赤枠に変える
        console.log("回答"+answerRank);
        console.log("正しい回答"+cards[random].rank);
        //選択されたカード削除
        const cardsAfterDelete = cards.filter(card=> card !== cards[random]);
        setCards(cardsAfterDelete);

        //カードが0枚の時、ボタンを非活性にする
        //if(cardsAfterDelete.length === 0) setIsDisabled(true);

        //ランダムな数生成して、stateにセット
        const r = (Math.floor(Math.random() * cards.length));
        const rr = r > 0 ? r-1 : r;
        setRandom(rr);
    }
    //モーダルclose
    const onClose = () => {
        closeModal();
    }
    //カードのアンダーラインの色情報取得
    const getColorInfo = (card: string):string => {
        let color="red";
        // if(!!card){
        //     const ex = card.split(' ');
        //     console.log(ex);
        //     let str="";
        //     if(ex[0] === ex[1]){
        //         console.log("poket")
        //         color = "#ff4500"
        //     }else{
        //         if(ex[1].length > 2){
        //             str = ex[1][2];
        //         }else{
        //             str = str[1][2];
        //         }
        //     }
        //     color = str == "s" ? "#008080" : "#778899"
        // }
        return color;
    }

    return(
        <ModalWrapper
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
        >
            <MSC.ModalContainer>
                {/* カード表示部 */}
                <MSC.CardContainer>
                    <MSC.Card color={getColorInfo(cards[random]?.card)}>
                        {cards[random]?.card}
                    </MSC.Card>
                    <MSC.Count>
                        {cards.length}
                    </MSC.Count>
                </MSC.CardContainer>
                {/* 答え表示部：臨時 */}
                <MSC.CorrectAnswer>
                    {correct}
                </MSC.CorrectAnswer>
                {
                    cards.length > 0
                    ?   <AllAnswerButton
                            isDisabled={isDisabled}
                            next={next}
                        />
                    :    <EndAllCard
                            updateCards={updateCards}
                            wrongAnswer={wrongAns}
                        />
                }
                {/* <AllAnswerButton
                    isDisabled={isDisabled}
                    next={next}
                /> */}
                {/* 戻る　＆　保存 */}
                <MSC.CloseButtonContainer>
                    <MSC.CloseButton onClick={onClose}>
                        close
                    </MSC.CloseButton>
                </MSC.CloseButtonContainer>
            </MSC.ModalContainer>
        </ModalWrapper>

    );
    });