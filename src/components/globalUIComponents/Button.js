import { StyledButton } from "../styles/Button.styled" 
import PropTypes from 'prop-types'


export const Button = ({bgColor, text, onClick}) => {

  return (
    <StyledButton bgColor={bgColor} onClick={onClick}>
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}