import { request } from 'express'
import Task from '../models/Task' //Importamos el modelo de datos

// Mostrar todas las tareas
export const findAllTasks = async (req,res) => { 
    const tasks = await Task.find()
    res.json(tasks)
}

//Crear una nueva tarea
export const createTask = async (req,res) => { 
    const newTask = new Task({ title: req.body.title, description: req.body.description });
    await newTask.save();
    res.json(newTask)
}

//Buscar una tarea por id
export const findOneTask = async (req,res) => {
    const task = await Task.findById(req.params.id) // El params son los parametros que le enviamos extra en la ruta (:id)
    res.json(task)
}

export const deleteTask = async (req, res) => {
    const data = await Task.findByIdAndDelete(req.params.id)
    res.json({
        message: `'${data.title}' Task were deleted successfully`
    });
}