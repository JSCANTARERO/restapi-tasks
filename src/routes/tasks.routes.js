import {Router} from "express";
import Task from '../models/Task' //Importamos el modelo de datos

const router = Router();

router.get('/', async (req,res) => { // La '/' hace referencia a /api/tasks/
    const tasks = await Task.find()
    res.json(tasks)
})

router.post('/', async (req,res) => { 
    const newTask = new Task({ title: req.body.title, description: req.body.description });
    await newTask.save();
    res.json(newTask)
})

export default router;