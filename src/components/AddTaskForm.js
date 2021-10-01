import StyledAddTaskForm from '../components/styles/AddTaskForm.styled'
import { InputSubmit } from "../components/styles/Button.styled"

const AddTaskForm = () => {
  return (
    <StyledAddTaskForm>
      <div className="form-control">
        <label htmlFor="text">Add Task</label>
        <input type="text" id="text" placeholder="Please add Task" />
      </div>
      <div className="form-control">
        <label htmlFor="day">Add Date</label>
        <input type="text" id="day" placeholder="Please add Date" />
      </div>
      <div className="form-control-check">
        <label htmlFor="reminder">Add Reminder</label>
        <input type="checkbox" id="reminder" />
      </div>
      <InputSubmit bgColor='black' className="block" />
    </StyledAddTaskForm>
  )
}

export default AddTaskForm
