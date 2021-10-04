import AddTaskForm from "./AddTaskForm";
import Header from "./Header";
import Tasks from "./Tasks";
import GlobalStyle from "./styles/Global.styled";
import { StyledContainer } from "./styles/Container.styled"
import { useState, useEffect } from 'react';
import Footer from "./Footer";
import About from "./About";
import { Route } from 'react-router-dom'

const Home = () => {
  const [tasks, setTasks] = useState([])
  const [isShowAddTaskFrom, setIsShowAddTaskForm] = useState(isShowAddTaskFrom =>false)

  useEffect(()=>{
    const getTasksFromServer = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasksFromServer()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks`)
    const data = await res.json() 
    return data
  }

  const toggleAddTask = ()=> {
    setIsShowAddTaskForm(isShowAddTaskFrom => !isShowAddTaskFrom)
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const findTask = tasks.find(task => task.id === id)
    const res = await fetch(
      `http://localhost:5000/tasks/${id}`,
      {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({reminder: !findTask.reminder})
      }
    )
    const data = await res.json()

    setTasks(tasks => tasks.map(task => task.id === id? data:task))
  }

  const handleAddTask = async (taskItem) => {
    const res = await fetch(
      `http://localhost:5000/tasks/`,
       { method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify(taskItem)
      })
    const data = await res.json()

    setTasks(tasks => [...tasks, data])
  }
  return (
    <>
      <GlobalStyle />
        <StyledContainer>
          <Header isShowAddTaskFrom={isShowAddTaskFrom} toggleAddTask={toggleAddTask} />
          {isShowAddTaskFrom && <AddTaskForm onSubmit={handleAddTask} />}
          <Route path='/' exact render={(props)=>(
            <>
            {tasks.length > 0? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} /> : 'No Tasks to Show'}
            </>
          )}></Route>
          <Route path='/about' component={About}></Route>
          <Footer />
        </StyledContainer>
    </>
  )
}

export default Home
