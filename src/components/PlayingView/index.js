import {
  PlayingViewContainer,
  RockScissorContainer,
  GameBtn,
  ChoiceImg,
} from './styledComponents'

const PlayingView = props => {
  const {choicesList, chooseChoice} = props

  return (
    <PlayingViewContainer>
      <RockScissorContainer>
        <GameBtn
          type="button"
          data-testid="rockButton"
          onClick={() => chooseChoice(choicesList[0])}
        >
          <ChoiceImg src={choicesList[0].imageUrl} alt={choicesList[0].id} />
        </GameBtn>
        <GameBtn
          type="button"
          data-testid="scissorsButton"
          onClick={() => chooseChoice(choicesList[1])}
        >
          <ChoiceImg src={choicesList[1].imageUrl} alt={choicesList[1].id} />
        </GameBtn>
      </RockScissorContainer>
      <GameBtn
        type="button"
        data-testid="paperButton"
        onClick={() => chooseChoice(choicesList[2])}
      >
        <ChoiceImg src={choicesList[2].imageUrl} alt={choicesList[2].id} />
      </GameBtn>
    </PlayingViewContainer>
  )
}

export default PlayingView
