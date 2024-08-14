import { taskModel } from "../Models/Tasks.js"

const getAllTodos=async(req,res)=>{
    const allTodos=await taskModel.find({})
    res.send(allTodos)
}

const createTodo=async(req,res)=>{

    const {Name,Status}=req.body
    const newTask=new taskModel({
        Name,
        Status
    })
    await newTask.save()
    res.send("Created")
}

const deleteTodo = async (req, res) => {
    try {
        await taskModel.findByIdAndDelete(req.params.id);
        res.send(`Task with id ${req.params.id} deleted successfully`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting task");
    }
};

const editTodo=async(req,res)=>{
    try {
        const {Name,Status}=req.body
        console.log(Name,Status)
        const updatedTask=await taskModel.findByIdAndUpdate(req.params.id,{Name,Status})
        await updatedTask.save()
        const updatedTodos=await taskModel.find({})
        res.send(updatedTodos)
    } catch (error) {
        console.log(error)
    }
}



export {getAllTodos,createTodo,deleteTodo,editTodo}