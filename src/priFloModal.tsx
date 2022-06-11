import React, { useState, useMemo, useRef } from 'react';
import ALLCARDS, { AllCardsType, ANSWER, AnswerRank } from './methods/createCards';
import {ModalWrapper} from './atoms/modalWrapper';
import * as MSC from './styled-components/prifloModalStyled';

export type ModalProps = {
    modalIsOpen: boolean,
    closeModal: () => void,
}

export const PriFloModal: React.FC<ModalProps> = React.memo(({modalIsOpen, closeModal}) => {

    //表示させる
    const [cards , setCards] = useState<AllCardsType[]>([]);
    const [random, setRandom] = useState<number>(0);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    //カード取得
    useMemo(() => setCards([...ALLCARDS]),[ALLCARDS]);


    //臨時
    const [correct, setCorrect] = useState<string>("");


    const next = (answerRank: number) => {
        //回答判定
        const correctRank = cards[random].rank;
        const ans = correctRank === answerRank ? "正解" : "不正解";
        const num = AnswerRank.filter(ar => ar.rank === correctRank)[0];
        const correct = `${ans} ${num.answer}`;
        setCorrect(correct);

        //TODO: 0.5秒だけ正解のボタンの枠を赤枠に変える

        console.log("回答"+answerRank);
        console.log("正しい回答"+cards[random].rank);
        //選択されたカード削除
        const cardsAfterDelete = cards.filter(card=> card !== cards[random]);
        setCards(cardsAfterDelete);
        if(cardsAfterDelete.length === 0) setIsDisabled(true);
        //ランダムな数生成して、stateにセット
        const r = (Math.floor(Math.random() * cards.length));
        const rr = r > 0 ? r-1 : r;
        setRandom(rr);
    }
    //button表示　コンポーネントにしてもいいかも
    const answerButton = (ans:any[]) => {
        return ans.map(answer =>
        <MSC.Button
            disabled={isDisabled}
            key={answer.answer}
            color={answer.color}
            fontColor={answer.fontColor}
            onClick={() => next(answer.rank)}
        >
            {answer.answer}
        </MSC.Button>);
    }

    //モーダルclose
    const onClose = () => {
        closeModal();
    }

    return(
        <ModalWrapper
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
        >
            <MSC.ModalContainer>
                {/* カード表示部 */}
                <MSC.CardContainer>
                    <MSC.Card>
                        {cards[random]?.card}
                    </MSC.Card>
                    <MSC.Count>
                        {cards.length}/169
                    </MSC.Count>
                </MSC.CardContainer>
                {/* 答え表示部：臨時 */}
                <MSC.CorrectAnswer>
                    {correct}
                </MSC.CorrectAnswer>
                {/* 回答ボタン 　コンポーネント切り分けてもいい*/}
                <MSC.AnswerButtonContainer>
                    <MSC.AnswerBox>
                        {answerButton(ANSWER[0])}
                    </MSC.AnswerBox>
                    <MSC.AnswerBox>
                        {answerButton(ANSWER[1])}
                    </MSC.AnswerBox>
                    <MSC.AnswerBox>
                        {answerButton(ANSWER[2])}
                    </MSC.AnswerBox>
                    <MSC.AnswerBox>
                        {answerButton(ANSWER[3])}
                    </MSC.AnswerBox>
                </MSC.AnswerButtonContainer>
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