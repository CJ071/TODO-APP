import { useState,useRef,useEffect } from 'react'
import axios from 'axios'
import Task from './components/Task'
import {v4 as uuidv4} from 'uuid'
import './App.css'

function App() {
  const [task, setTask] = useState([])
  const taskName=useRef(null)

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/todos/get")
      setTask(response.data)
      console.log("response data",response.data)
    } catch (error) {
      console.error("Error fetching tasks:", error)
    }
  }

  const handleAdd = async () => {
    taskName.current.focus()

    // Check if taskName is not empty before proceeding
  if (!taskName.current.value.trim()) {
    console.error("Task name cannot be empty");
    return;
  }

    const newTask = {
      Name: taskName.current.value,
      status: false,
    }

    try {
      await axios.post("http://localhost:3001/api/todos/create", newTask)
      // Fetch tasks again after adding a new task
      fetchTasks()
      taskName.current.value = ""
    } catch (error) {
      console.error("Error adding task:", error)
    }
  }


  return (
    <div className="flex items-center justify-center h-screen">

    <div className="text-center">
      <h1 className="text-3xl font-bold mt-8 mb-4">Whats new today?</h1>
      <input
    type="text"
    id="floating_outlined"
    className="block px-2.5 pb-2.5 pt-4 w-4/6 mx-auto text-sm text-gray-900 bg-transparent rounded-lg border-1 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-black focus:ring-0 focus:border-blue-600"
    placeholder="Enter your task..." ref={taskName}
    />
      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add a task
      </button>
    </div>

    {/* ToDo List */}
    <div>
    {task===null? <h1>No ToDos</h1>:  task.map((t)=> <Task key={uuidv4()} task={t} allTasks={task} setTask={setTask}/>) }
    </div>

  </div>
  )
}


export default App


