import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  GameContainer,
  ScoreContainer,
  TitleHeading,
  TitleHeadingContainer,
  ScoreValueContainer,
  ScoreText,
  ScoreValue,
  ImagesContainer,
  GameContentContainer,
  ImageItem,
  ResultImagesContainer,
  PlayerText,
  SingleImageContainer,
  ResultText,
  CustomButton,
  ResultContainer,
  ModalContainer,
  PopUpImage,
  CloseButton,
  RulesButton,
  PopupContainer,
} from './styledComponents'
import ImageButton from '../ImageButton'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    dataTestId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    dataTestId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    dataTestId: 'paperButton',
  },
]

class RockPaperScissors extends Component {
  state = {
    isGameStarted: true,
    userClickImage: '',
    generateImage: '',
    gameResult: '',
    value: 0,
  }

  onClickPlayAgain = () => {
    this.setState({
      isGameStarted: true,
      userClickImage: '',
      generateImage: '',
      gameResult: '',
    })
  }

  onClickImageButton = id => {
    const imageItem = choicesList.find(eachItem => eachItem.id === id)
    const generateId = Math.floor(Math.random() * choicesList.length)

    let result = ''

    if (imageItem.id === choicesList[generateId].id) {
      result = 'IT IS DRAW'
    } else if (
      (imageItem.id === 'ROCK' && choicesList[generateId].id === 'SCISSORS') ||
      (imageItem.id === 'SCISSORS' && choicesList[generateId].id === 'PAPER') ||
      (imageItem.id === 'PAPER' && choicesList[generateId].id === 'ROCK')
    ) {
      result = 'YOU WON'
    } else {
      result = 'YOU LOSE'
    }

    this.setState({
      userClickImage: imageItem.imageUrl,
      generateImage: choicesList[generateId].imageUrl,
      isGameStarted: false,
      gameResult: result,
    })

    if (result === 'YOU WON') {
      this.setState(prevState => ({value: prevState.value + 1}))
    } else if (result === 'YOU LOSE') {
      this.setState(prevState => ({value: prevState.value - 1}))
    }
  }

  render() {
    const {
      userClickImage,
      generateImage,
      isGameStarted,
      gameResult,
      value,
    } = this.state

    return (
      <GameContainer>
        <GameContentContainer>
          <ScoreContainer>
            <TitleHeadingContainer>
              <TitleHeading>
                Rock <br />
                Paper <br />
                Scissors
              </TitleHeading>
            </TitleHeadingContainer>
            <ScoreValueContainer>
              <ScoreText>Score</ScoreText>
              <ScoreValue>{value}</ScoreValue>
            </ScoreValueContainer>
          </ScoreContainer>

          {isGameStarted ? (
            <ImagesContainer>
              {choicesList.map(eachItem => (
                <ImageButton
                  eachImage={eachItem}
                  key={eachItem.id}
                  onClickImageButton={this.onClickImageButton}
                />
              ))}
            </ImagesContainer>
          ) : (
            <ResultContainer>
              <ResultImagesContainer>
                <SingleImageContainer>
                  <PlayerText>You</PlayerText>
                  <ImageItem src={userClickImage} alt="your choice" />
                </SingleImageContainer>
                <SingleImageContainer>
                  <PlayerText>Opponent</PlayerText>
                  <ImageItem src={generateImage} alt="opponent choice" />
                </SingleImageContainer>
              </ResultImagesContainer>
              <ResultText>{gameResult}</ResultText>
              <CustomButton type="button" onClick={this.onClickPlayAgain}>
                PLAY AGAIN
              </CustomButton>
            </ResultContainer>
          )}
          <PopupContainer>
            <Popup
              modal
              trigger={<RulesButton type="button">Rules</RulesButton>}
            >
              {close => (
                <ModalContainer>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseButton>
                  <PopUpImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ModalContainer>
              )}
            </Popup>
          </PopupContainer>
        </GameContentContainer>
      </GameContainer>
    )
  }
}

export default RockPaperScissors
