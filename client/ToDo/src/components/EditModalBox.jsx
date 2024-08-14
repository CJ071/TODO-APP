import axios from 'axios';
import { useState } from 'react';

const Modal = ({ isOpen, onClose,task,setTask,all }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState(false);
  const handleSave = async(task) => {

const updatedObject={
  Name:name===""?task.Name:name,
  Status:status==='true'?true:false
}

const response=await axios.put(`http://localhost:3001/api/todos/edit/${task._id}`,updatedObject).then(res=>res.data).catch(err=>console.log(err))
setTask(response)
  
// })
    // // Add your logic here to handle the form data
    // console.log('Name:', name);
    // console.log('Status:', status);

    // const index=all.findIndex(a=>a.Id===task.Id);
    // const allTodo=[...all]
    // const updatedTodo={
    //     Name:name === '' ? allTodo[index].Name : name,
    //     status: status === null ? allTodo[index].status : status,
    //     Id:task.Id
    // }

    //   allTodo[index]=updatedTodo
    //   setTask(allTodo)
   

    closeBox();
    
  };

  const closeBox=()=>{
    onClose(!isOpen)
  }

  return (
    <div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
          <h2 className="text-2xl font-bold mb-4">Edit Task</h2>

          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter task name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Status Select */}
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              className="mt-1 p-2 w-full border rounded-md"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="false">Incomplete</option>
              <option value="true">Completed</option>
            </select>
          </div>

          {/* Save Button */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=>handleSave(task)}
          >
            Save
          </button>

           {/* Close Button */}
           <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={closeBox}
          >
            Edit Later
            </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
