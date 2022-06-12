import styled from "styled-components";

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const CardContainer = styled.div`
    flex: 1 1 15%;
    border: 2px solid black;
    position: relative;
    margin-bottom: 10px;
`;

export const CorrectAnswer = styled.div`
    flex: 1 1 5%;
    position: relative;
    margin-bottom: 10px;
    text-align: center;
    font-size: 30px;
`;

export const AnswerButtonContainer = styled.div`
    flex: 1 1 70%;
    border: 2px solid black;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const EndButtonContiner = styled(AnswerButtonContainer)`
    justify-content: space-around;
`;

export const CorrectBox = styled.div`
    text-align: center;
    font-size: 20px;
    margin: 0 50px;
    border-bottom: solid 10px #87CEFA;
`;

export const CloseButtonContainer = styled.div`
    flex: 1 1 5%;
    border: 2px solid black;
    display: flex;
    justify-content: space-around;
`;

export const Card = styled.div<{color: string}>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    color: black
`;
// background: linear-gradient(transparent 60%, ${({color}) => color} 0%);
export const AnswerBox = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
`;

export const Button = styled.button<{color: string, fontColor?: string}>`
    margin: auto;
    border-radius: 10px;
    height: 90px;
    width: 100px;
    background-color: ${({color}) => color};
    color: ${({fontColor}) => fontColor};
    border: 2px solid black;
    font-size: 1rem;
`;

export const Count = styled.div`
    position: absolute;
    top: calc(100% - 20px);
    left: 100%;
    transform: translate(-100%, 0%);
`;

export const CloseButton = styled.button`
    width: 100%;
`;

export const PorkerGameContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-top: 300px;
`;

export const CommonButton = styled.button`
    border-radius: 10px;
    margin: 0 50px;
    height: 40px;
`;