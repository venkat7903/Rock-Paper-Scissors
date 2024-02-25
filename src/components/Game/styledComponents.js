import Styled from 'styled-components'

export const GameContainer = Styled.div`
    min-height: 100vh;
    background: #223a5f;
    padding: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;
    font-family: 'Bree Serif';
`
export const SubGameContainer = Styled.div`
    width: 90%;
    max-width: 1140px;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const ScoreLabelsContainer = Styled.div`
    width: 100%;
    border: 2px solid #fff;
    padding: 10px 20px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
`
export const ChoicesList = Styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
`

export const Choice = Styled.li`
    color: #fff;
    font-size: 24px;
`

export const ScoreContainer = Styled.div`
    background: #fff;
    width: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #223a5f;
    border-radius: 8px;
`

export const ScoreTitle = Styled.p`
    color: #223a5f;
    margin: 0;
    font-size: 20px;
`

export const ScoreCount = Styled.p`
    color: #223a5f;
    font-size:40px;
    margin: 0;
    font-family: 'Roboto';
`
