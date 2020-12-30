"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var TaskController = _interopRequireWildcard(require("../controllers/task.controller"));

//El asterisco es para importar todas las funciones
var router = (0, _express.Router)(); // La '/' hace referencia a /api/tasks/
// Mostrar todas las tareas

router.get('/', TaskController.findAllTasks); //Crear una nueva tarea

router.post('/', TaskController.createTask); //Encontrar todas las tareas terminadas

router.get('/done', TaskController.findAllDoneTask); //Buscar una tarea por id

router.get('/:id', TaskController.findOneTask); //Eliminar una tarear

router["delete"]('/:id', TaskController.deleteTask);
router.put('/:id', TaskController.uptTask);
var _default = router;
exports["default"] = _default;