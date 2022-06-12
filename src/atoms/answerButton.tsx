import * as MSC from '../styled-components/prifloModalStyled';
import React from 'react';

type Props = {
    isDisabled: boolean,
    next: (rank: any) => void,
    ans: any
}

export const AnswerButton:React.FC<Props> = (props) => {
    const {isDisabled, next, ans} = props;

        return(
            <>
                {ans.map((answer: any) =>(
                    <MSC.Button
                        disabled={isDisabled}
                        key={answer.answer}
                        color={answer.color}
                        fontColor={answer.fontColor}
                        onClick={() => next(answer.rank)}
                    >
                        {answer.answer}
                    </MSC.Button>
                ))}
            </>
        );
};