
import { useState } from "react"
import Modal from "./EditModalBox"
import axios from 'axios'


const Task = ({task,allTasks,setTask}) => {
  const [openEdit,setOpenEdit]=useState(false)
  const handleEdit=()=>{
    setOpenEdit(true)
  }

  // const handleDelete=()=>{
  //   const tasks=allTasks

  //   const ToDo=tasks.filter(t=>t.Id!==task.Id)

  //   setTask(ToDo)
  // }
const handleDeleteTask=async(taskId)=>{
 const item=await axios.delete(`http://localhost:3001/api/todos/delete/${taskId}`).then(res=>res.data)
 const filteredTask=allTasks.filter(task=>task._id!==taskId)
 setTask(filteredTask)
}
  

  return (
    <div>
      <h2> Task: {task.Name}</h2>
      <h2> Status : {task.Status?"Completed":"pending"}</h2> 
      <button onClick={handleEdit} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
  Edit task 
    </button>
    <button onClick={()=>handleDeleteTask(task._id)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
  Delete task 
    </button>
    
    <Modal isOpen={openEdit} onClose={setOpenEdit} all={allTasks} task={task} setTask={setTask}/>

    </div>
  )
}

export default Task
