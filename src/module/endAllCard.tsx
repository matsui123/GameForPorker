import * as MSC from '../styled-components/prifloModalStyled';
import React from 'react';
import {AnswerRank} from '../methods/createCards';

type Props = {
    wrongAnswer:any[],
    updateCards: (ans: any) => void
}
export const EndAllCard: React.FC<Props> = React.memo((props) => {

    const {wrongAnswer, updateCards} = props;

    const playGameFromWrongAnswer = () => {
        updateCards(wrongAnswer);
    }

    const oneOneGame = () => {
        updateCards(AnswerRank);
    }
    //正当数表示したい
    return(
        <MSC.EndButtonContiner>
            <MSC.CorrectBox>正当数{169-wrongAnswer.length}/169</MSC.CorrectBox>
            <MSC.CommonButton onClick={playGameFromWrongAnswer}>間違った単語のみ</MSC.CommonButton>
            <MSC.CommonButton onClick={oneOneGame}>もう一回</MSC.CommonButton>
        </MSC.EndButtonContiner>
    );
});