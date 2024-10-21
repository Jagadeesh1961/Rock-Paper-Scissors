import {CustomButton, ListItem, ImageItem} from './styledComponents'

const ImageButton = props => {
  const {eachImage, onClickImageButton} = props
  const {imageUrl, id, dataTestId} = eachImage

  return (
    <ListItem>
      <CustomButton
        type="button"
        onClick={() => onClickImageButton(id)}
        data-testid={dataTestId}
      >
        <ImageItem src={imageUrl} alt={id} />
      </CustomButton>
    </ListItem>
  )
}

export default ImageButton
