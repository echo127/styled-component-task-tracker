import { Button } from "./globalUIComponents/Button"
import { StyledHeader } from "./styles/Header.styled"


const Header = ({isShowAddTaskFrom, toggleAddTask, newType}) => {

  return (
    <StyledHeader>
      <h1>Task Tracker{newType}</h1>
      <Button bgColor={isShowAddTaskFrom? 'green': 'black'} text={isShowAddTaskFrom? 'Close':'Add'} onClick={toggleAddTask} />
    </StyledHeader>
  )
}


export default Header
