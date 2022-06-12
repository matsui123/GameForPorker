import * as MSC from '../styled-components/prifloModalStyled';
import { ANSWER } from '../methods/createCards';
import React from 'react';
import { AnswerButton } from '../atoms/answerButton';

type Props = {
    isDisabled: boolean,
    next: (rank: any) => void
}
export const AllAnswerButton:React.FC<Props> = React.memo(({
    isDisabled,
    next
}) => {
    return(
        <MSC.AnswerButtonContainer>
            {ANSWER.map((ans, index) => (
                <MSC.AnswerBox key={index}>
                    <AnswerButton
                        isDisabled={isDisabled}
                        next={next}
                        ans={ans}
                    />
                </MSC.AnswerBox>
            ))}
        </MSC.AnswerButtonContainer>
    );
});