import Task from "./tasks/Task"

const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map(task => <Task key={task.id} task={task} />)}
    </>
  )
}

export default Tasks
