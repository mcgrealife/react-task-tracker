import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {v4 as uuidv4} from 'uuid'
import React from 'react'
import data from '../db.json'


function App() {
  const [tasks, setTasks] = useState(
    [
    ]
)

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) =>
        task.id !== id
        ))
    }

    const addTask = (task) => {
      const id = uuidv4;
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }

    function toggleForm() {
    setShowForm(!showForm)
    }

    const [showForm, setShowForm] = useState(false)

  return (
    <div className='container'>
      <Header onClick={toggleForm} /> 
      {showForm && 
      <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} /> : 
        <p>No tasks!!!</p> }
    </div>
  )
}

export default App
