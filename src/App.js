import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'meeting at school',
            day: 'feb 6th at 1:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'another task',
            day: 'feb 7th at 2:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'order food',
            day: 'feb 6th at 5:30pm',
            reminder: false
        }
    ]
)

    // delete task
    // where did this id come from? it this part of the browser?
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) =>
        task.id !== id
        ))
    }

    const addTask = (task) => {
      const id = Math.floor(10000) + 1;
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }

    function showForm() {

    }

  return (
    <div className='container'>
      <Header onClick={showForm}/>   
      <AddTask onAdd={addTask}/>
      {tasks.length === 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask}/> : 
        <p>No tasks!!!</p> }
      
    </div>
  )
}

export default App
