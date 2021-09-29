import { StyledButton } from "../styles/Button.styled" 

export const Button = ({bgColor, text, onClick}) => {

  return (
    <StyledButton bgColor={bgColor} onClick={onClick}>
      {text}
    </StyledButton>
  )
}
