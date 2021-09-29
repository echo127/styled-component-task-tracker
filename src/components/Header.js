import { Button } from "./globalUIComponents/Button"
import { StyledHeader } from "./styles/Header.styled"

const Header = ({isShowAddTaskFrom, toggleAddTask}) => {

  return (
    <StyledHeader>
      <h1>Task Tracker</h1>
      <Button bgColor={isShowAddTaskFrom? 'green': 'black'} text={isShowAddTaskFrom? 'Close':'Add'} onClick={toggleAddTask} />
    </StyledHeader>
  )
}

export default Header
