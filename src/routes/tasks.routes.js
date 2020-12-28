import {Router} from "express";

import * as TaskController from "../controllers/task.controller"; 
//El asterisco es para importar todas las funciones

const router = Router();

// La '/' hace referencia a /api/tasks/
// Mostrar todas las tareas
router.get('/', TaskController.findAllTasks);

//Crear una nueva tarea
router.post('/', TaskController.createTask);

//Buscar una tarea por id
router.get('/:id', TaskController.findOneTask);

//Eliminar una tarear
router.delete('/:id', TaskController.deleteTask);

export default router;