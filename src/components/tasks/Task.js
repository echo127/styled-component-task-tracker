import { StyledTask } from '../styles/Task.styled'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const Task = ({task, deleteTask}) => {
  return (
    <StyledTask className={task.reminder? 'reminder': ''}>
     <h3>{task.text}<FaTimes onClick={()=>deleteTask(task.id)}/></h3>
     <p>{task.day}</p>
    </StyledTask>
  )
}

Task.prototype = {
  task: PropTypes.object.isRequired
}

export default Task
