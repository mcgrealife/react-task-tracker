import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import React from 'react'


function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
   const getTasks = async () => {
    const  tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
   }

    getTasks()
  }, [])


  // fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://127.0.0.1:5000/tasks')
    const data = await res.json()

    return data
  }


  const deleteTask = async (id) => {
    await fetch(`http://127.0.0.1:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    
    setTasks(tasks.filter((task) =>
      task.id !== id
    ))
  }

  const addTask = async (task) => {
    
  const res = await fetch('http://127.0.0.1:5000/tasks/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json()

    setTasks([...tasks, data])
    setShowForm(!showForm)
  }

  function toggleForm() {
    setShowForm(!showForm)
  }

  const [showForm, setShowForm] = useState(false)

  return (
    <div className='container'>
      <Header onClick={toggleForm} />
      {showForm &&
        <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} /> :
        <p>No tasks!!!</p>}
    </div>
  )
}

export default App
