import {
    request
} from 'express'
import Task from '../models/Task' //Importamos el modelo de datos
const ObjectID = require('mongodb').ObjectID;

// Mostrar todas las tareas
export const findAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong retrieving the tasks',
        });
    }
}

//Crear una nueva tarea
export const createTask = async (req, res) => {

    if (!req.body.title) {
        return res.status(404).send({
            message: 'Title cannot be empty'
        });
    }

    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        });
        await newTask.save();
        res.json(newTask)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong creating the task',
        });
    }
}

// Mostrar todas las tareas terminadas
export const findAllDoneTask = async (req, res) => {
    const tasks = await Task.find({
        done: true
    });
    res.json(tasks)
}

//Buscar una tarea por id
export const findOneTask = async (req, res) => {
    const {
        id
    } = req.params;

    const _id = new ObjectID(id);
    const task = await Task.findOne({_id});

    if (!task)
        return res.status(404).json({
            message: `Task with id ${id} does not exist`
        });

    res.status(200).json(task);
};

// El params son los parametros que le enviamos extra en la ruta (:id)

//Eliminar una tarea
export const deleteTask = async (req, res) => {
    const data = await Task.findByIdAndDelete(req.params.id)
    res.json({
        message: `'${data.title}' Task were deleted successfully`
    });
}

export const uptTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        message: 'Task was updated successfully'
    });
}