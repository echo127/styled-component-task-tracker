import StyledAddTaskForm from '../components/styles/AddTaskForm.styled'
import { InputSubmit } from "../components/styles/Button.styled"
import {useState} from 'react'

const AddTaskForm = ({onSubmit}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const handleSubmit =(e) =>{
    e.preventDefault()
    if(!text) {
      alert('Please input text')
      return
    }
    if(!day) {
      alert('Please input day')
      return
    }
    onSubmit({text, day, reminder})
  }

  return (
    <StyledAddTaskForm onSubmit={handleSubmit} >
      <div className="form-control" >
        <label htmlFor="text">Add Task</label>
        <input type="text" id="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Please add Task" />
      </div>
      <div className="form-control">
        <label htmlFor="day">Add Date</label>
        <input type="text" id="day" value={day} onChange={(e)=>setDay(e.target.value)} placeholder="Please add Date" />
      </div>
      <div className="form-control-check">
        <label htmlFor="reminder">Add Reminder</label>
        <input type="checkbox" id="reminder" checked={reminder} onChange={(e) => setReminder(e.target.checked)} />
      </div>
      <InputSubmit bgColor='black' className="block" />
    </StyledAddTaskForm>
  )
}

export default AddTaskForm
