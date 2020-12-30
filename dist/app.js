"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

// const express = require('express'); lo cambiamos por el import
// Con babel podemos utilizar los imports y exports de javascript
// Ahora utilizaremos el comando npx (que sirve para buscar unm comando en especifico en node_modules)
// npx babel-node src/index.js
// Pero para no escribir un comando tan largo creamos el siguiente script en el package.json
// "start": "nodemon src/index.js --exec babel-node"
//Middleware
var app = (0, _express["default"])(); // Settings

app.set('port', process.env.PORT || 3000); // Utilizamos process.env.PORT para que si en caso de que el puerto este ocupado que este lo tome
//Middlewares

app.use((0, _cors["default"])()); //con esto cualquier aplicacion puede hacer solicitudes

app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].urlencoded({
  extended: false
})); //Con esto el servidor podra entender las petiociones
// que vayan llegando desde formularios HTML
// Routes

app.get('/', function (req, res) {
  res.json({
    message: 'Welcome to my application'
  });
});
app.use('/api/tasks', _tasks["default"]);
var _default = app;
exports["default"] = _default;