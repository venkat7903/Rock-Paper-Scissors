import {
  ChoiceImg,
  RockScissorContainer,
  GameResultsContainer,
  ChoiceContainer,
  PlayAgain,
  GameResult,
} from './styledComponents'

const GameResultsView = props => {
  const {gameResult, yourChoice, randomChoice, playAgain} = props

  return (
    <GameResultsContainer>
      <RockScissorContainer>
        <ChoiceContainer>
          <h1 style={{color: '#fff'}}>YOU</h1>
          <ChoiceImg src={yourChoice.imageUrl} alt="your choice" />
        </ChoiceContainer>
        <ChoiceContainer>
          <h1 style={{color: '#fff'}}>OPPONENT</h1>
          <ChoiceImg src={randomChoice.imageUrl} alt="opponent choice" />
        </ChoiceContainer>
      </RockScissorContainer>
      <GameResult>{gameResult}</GameResult>
      <PlayAgain type="button" onClick={() => playAgain()}>
        PLAY AGAIN
      </PlayAgain>
    </GameResultsContainer>
  )
}

export default GameResultsView
