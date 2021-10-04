import { Button } from "./globalUIComponents/Button"
import { StyledHeader } from "./styles/Header.styled"
import PropTypes from 'prop-types'



const Header = ({isShowAddTaskFrom, toggleAddTask}) => {

  return (
    <StyledHeader>
      <h1>Task Tracker</h1>
      <Button bgColor={isShowAddTaskFrom? 'green': 'black'} text={isShowAddTaskFrom? 'Close':'Add'} onClick={toggleAddTask} />
    </StyledHeader>
  )
}

Header.prototype = {
  isShowAddTaskFrom: PropTypes.bool.isRequired,
  toggleAddTask: PropTypes.func.isRequired,
}
export default Header
