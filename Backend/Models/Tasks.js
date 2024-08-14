import mongoose from "mongoose";
import { model,Schema } from "mongoose";

const taskSchema=new Schema({
    Name:{type:String,required:true},
    Status:{type:Boolean,default:false}
})

export const taskModel=model("task",taskSchema)