import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import GlobalStyle from "./components/styles/Global.styled";
import { StyledContainer } from "./components/styles/Container.styled"
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(tasks => [
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'School Appointment',
      day: 'Feb 9th at 2:30pm',
      reminder: true,
    },
    {
      id: 4,
      text: 'Meeting Appointment',
      day: 'Feb 9th at 11:30pm',
      reminder: false,
    },
  ])
  const [isShowAddTaskFrom, setIsShowAddTaskForm] = useState(isShowAddTaskFrom =>false)

  const toggleAddTask = ()=> {
    setIsShowAddTaskForm(isShowAddTaskFrom => !isShowAddTaskFrom)
  }

  const deleteTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <Header isShowAddTaskFrom={isShowAddTaskFrom} toggleAddTask={()=>toggleAddTask} />
        {isShowAddTaskFrom && <AddTaskForm />}
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      </StyledContainer>      
    </>
  );
}

export default App;
