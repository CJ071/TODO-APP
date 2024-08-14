
const AddTaskForm = ({Open,setIsOpen}) => {

  const handleSubmit=(e)=>{
    e.preventDefault()
    setIsOpen(!open)
  }
  return (
    <>
      <button
        onClick={() => setOpenForm(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Add Task</button>

    !Open?<h1>No tasks</h1>:<div className="relative">
      <form onSubmit={handleSubmit}>
     
   

  
</form>

</div>

</>
      
  )
}

export default AddTaskForm
