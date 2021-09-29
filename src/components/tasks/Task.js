import { StyledTask } from '../styles/Task.styled'
import PropTypes from 'prop-types'

const Task = ({task}) => {
  return (
    <StyledTask className={task.reminder? 'reminder': ''}>
     <h3>{task.text}</h3>
     <p>{task.day}</p>
    </StyledTask>
  )
}

Task.prototype = {
  task: PropTypes.object.isRequired
}

export default Task
