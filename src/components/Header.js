import { Button } from "./globalUIComponents/Button"
import { StyledHeader } from "./styles/Header.styled"
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'



const Header = ({isShowAddTaskFrom, toggleAddTask}) => {
  const location = useLocation()
  return (
    <StyledHeader>
      <h1>Task Tracker</h1>
      {location.pathname === '/' && <Button bgColor={isShowAddTaskFrom? 'green': 'black'} text={isShowAddTaskFrom? 'Close':'Add'} onClick={toggleAddTask} />}
    </StyledHeader>
  )
}

Header.prototype = {
  isShowAddTaskFrom: PropTypes.bool.isRequired,
  toggleAddTask: PropTypes.func.isRequired,
}
export default Header
