import { StyledTask } from '../styles/Task.styled'
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'


export const Task = ({task, deleteTask, toggleReminder}) => {

  return (
    <StyledTask className={task.reminder? 'reminder': ''} onDoubleClick={()=>toggleReminder(task.id)} >
     <h3>{task.text}<FaTimes onClick={()=>deleteTask(task.id)}/></h3>
     <p>{task.day}</p>
    </StyledTask>
  )
}


Task.propTypes = {
  task: PropTypes.exact({
    id: PropTypes.number,
    text: PropTypes.string,
    day: PropTypes.string,
    reminder: PropTypes.bool,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleReminder: PropTypes.func.isRequired,
}

