import {Router} from "express";

import * as TaskController from "../controllers/task.controller"; 
//El asterisco es para importar todas las funciones

const router = Router();

// La '/' hace referencia a /api/tasks/
// Mostrar todas las tareas
router.get('/', TaskController.findAllTasks);

//Crear una nueva tarea
router.post('/', TaskController.createTask);

//Encontrar todas las tareas terminadas
router.get('/done', TaskController.findAllDoneTask);

//Buscar una tarea por id
router.get('/:id', TaskController.findOneTask);

//Eliminar una tarear
router.delete('/:id', TaskController.deleteTask);

router.put('/:id', TaskController.uptTask);


export default router;