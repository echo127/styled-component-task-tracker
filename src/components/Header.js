import { Button } from "./globalUIComponents/Button"
import { StyledHeader } from "./styles/Header.styled"

const Header = () => {
  return (
    <StyledHeader>
      <h1>Task Tracker</h1>
      <Button />
    </StyledHeader>
  )
}

export default Header
