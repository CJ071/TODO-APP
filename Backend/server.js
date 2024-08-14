import express from 'express';
import mongoose from 'mongoose';
import router from './Routes/ToDoRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app=express()
const port=3001
const mongo_URL="mongodb://localhost:27017"

mongoose
.connect(mongo_URL)
.then(()=>console.log("Successfully connected to Database"))

app.get('/',(req,res)=>{
    res.send("Welcome to Todo Backend")
})

app.use(cors())
app.use(bodyParser.json())
app.use("/api/todos",router)

app.listen(port,()=>{
    console.log(`Server running successfuly on port ${port}`)
})