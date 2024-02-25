import {Component} from 'react'
import ReactPopup from '../PopupView'
import PlayingView from '../PlayingView'
import GameResultsView from '../GameResultView'
import {
  GameContainer,
  SubGameContainer,
  ScoreLabelsContainer,
  ChoicesList,
  Choice,
  ScoreCount,
  ScoreContainer,
  ScoreTitle,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RPSGame extends Component {
  state = {
    score: 0,
    isPlaying: true,
    gameResult: '',
    yourChoice: '',
    randomChoice: '',
  }

  updateScore = value => {
    const {score} = this.state
    return score + value
  }

  playAgain = () => {
    this.setState({
      isPlaying: true,
      gameResult: '',
      yourChoice: '',
      randomChoice: '',
    })
  }

  chooseChoice = yourChoice => {
    const random = Math.floor(Math.random() * choicesList.length)
    const randomChoice = choicesList[random]
    let result
    if (yourChoice.id === 'ROCK') {
      if (randomChoice.id === 'PAPER') {
        result = 'YOU LOSE'
      } else if (randomChoice.id === 'SCISSORS') {
        result = 'YOU WON'
      } else {
        result = 'IT IS DRAW'
      }
    } else if (yourChoice.id === 'SCISSORS') {
      if (randomChoice.id === 'ROCK') {
        result = 'YOU LOSE'
      } else if (randomChoice.id === 'PAPER') {
        result = 'YOU WON'
      } else {
        result = 'IT IS DRAW'
      }
    } else if (yourChoice.id === 'PAPER') {
      if (randomChoice.id === 'SCISSORS') {
        result = 'YOU LOSE'
      } else if (randomChoice.id === 'ROCK') {
        result = 'YOU WON'
      } else {
        result = 'IT IS DRAW'
      }
    }

    let value
    if (result === 'YOU WON') {
      value = 1
    } else if (result === 'YOU LOSE') {
      value = -1
    } else {
      value = 0
    }

    const updatedScore = this.updateScore(value)

    this.setState({
      isPlaying: false,
      gameResult: result,
      score: updatedScore,
      yourChoice,
      randomChoice,
    })
  }

  renderScoreContainer = () => {
    const {score} = this.state

    return (
      <ScoreLabelsContainer>
        <h1 style={{color: '#fff'}}>Rock Paper Scissors</h1>
        <ScoreContainer>
          <ScoreTitle>Score</ScoreTitle>
          <ScoreCount>{score}</ScoreCount>
        </ScoreContainer>
      </ScoreLabelsContainer>
    )
  }

  render() {
    const {isPlaying, gameResult, yourChoice, randomChoice} = this.state
    return (
      <GameContainer>
        <SubGameContainer>
          {this.renderScoreContainer()}
          {isPlaying ? (
            <PlayingView
              choicesList={choicesList}
              chooseChoice={this.chooseChoice}
            />
          ) : (
            <GameResultsView
              gameResult={gameResult}
              yourChoice={yourChoice}
              randomChoice={randomChoice}
              updateScore={this.updateScore}
              playAgain={this.playAgain}
            />
          )}
          <ReactPopup />
        </SubGameContainer>
      </GameContainer>
    )
  }
}

export default RPSGame
