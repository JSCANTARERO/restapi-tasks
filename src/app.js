// const express = require('express'); lo cambiamos por el import
// Con babel podemos utilizar los imports y exports de javascript

import express from "express";

// Ahora utilizaremos el comando npx (que sirve para buscar unm comando en especifico en node_modules)
// npx babel-node src/index.js
// Pero para no escribir un comando tan largo creamos el siguiente script en el package.json
// "start": "nodemon src/index.js --exec babel-node"

import TasksRoutes from "./routes/tasks.routes";
import morgan from 'morgan'; //Middleware

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
// Utilizamos process.env.PORT para que si en caso de que el puerto este ocupado que este lo tome

//Middlewares
app.use(express.json());

app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to my application'
    })
});

app.use('/api/tasks', TasksRoutes);

export default app;