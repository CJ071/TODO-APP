import express from 'express'
import { getAllTodos,createTodo,deleteTodo ,editTodo} from '../Controllers/Todos.js'

const router=express.Router()

router.route("/get").get(getAllTodos)

router.route("/create").post(createTodo)

router.route("/delete/:id").delete(deleteTodo)

router.route("/edit/:id").put(editTodo)

export default router