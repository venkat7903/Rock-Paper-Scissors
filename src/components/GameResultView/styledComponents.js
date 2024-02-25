import Styled from 'styled-components'

export const ChoiceImg = Styled.img`
    width: 130px;
`
export const RockScissorContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
`
export const GameResultsContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: 'Roboto';
`
export const ChoiceContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const PlayAgain = Styled.button`
    align-self: center;
    margin-top: 20px;
    padding: 10px 20px;
    background: #fff;
    font-family: 'Bree Serif';
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    color: #223a5f;
    border: none;
    outline: none;
    cursor: pointer;
`
export const GameResult = Styled.p`
    color: #fff;
    font-size: 24px;
    margin: 0;
    font-weight: 600;
    margin-top: 15px;
`
