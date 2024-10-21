import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const GameContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`

export const ScoreContainer = styled.div`
  border: 1px solid white;
  border-radius: 8px;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`

export const TitleHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleHeading = styled.h1`
  color: white;
  font-size: 22px;
  font-weight: 400;
  font-family: 'Bree Serif';
  margin: 0px;
`

export const ScoreValueContainer = styled.div`
  background-color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-align: center;
`

export const ScoreText = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 5px;
`

export const ScoreValue = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 26px;
  margin: 0;
`

export const ImagesContainer = styled.ul`
  max-width: 400px;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
`

export const ImageItem = styled.img`
  width: 130px;
`

export const ResultImagesContainer = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`

export const PlayerText = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 32px;
`
export const SingleImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResultText = styled.p`
  color: white;
  font-family: 'Roboto';
  font-weight: 500;
`

export const CustomButton = styled.button`
  padding: 12px 24px;
  cursor: pointer;
  outline: none;
  background-color: white;
  border: none;
  border-radius: 6px;
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 30px;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ModalContainer = styled.div`
  background-color: white;
  max-width: 500px;
  padding: 20px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PopUpImage = styled.img`
  width: 90%;
  height: 90%;
`

export const CloseButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  align-self: flex-end;
  font-size: 18px;
  padding: 5px;
  margin-bottom: 10px;
`

export const RulesButton = styled.button`
  color: #223a5f;
  padding: 12px 24px;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
`

export const PopupContainer = styled.div`
  align-self: flex-end;
`
