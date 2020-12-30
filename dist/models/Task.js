"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

// Utilizamos solo los modulos Schema y model que seran los que utilizaremos en lugar de todos los modulos
var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true // Trim elimina espacios innecesarios '   hello   ' ==> 'hello'

  },
  description: {
    type: String,
    trim: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  versionKey: false,
  // Mongoose generalmente agrega unos valores a los objetos con esta linea le
  // decimos que evite hacerlo
  timestamps: true //agrega propiedades createdAt y updatedAt

});
taskSchema.plugin(_mongoosePaginateV["default"]);

var _default = (0, _mongoose.model)('Task', taskSchema); //el model es para que cuando llamemos la funcion esta nos decuelva un
// objeto con metodos ya para guardar, editar o eliminar


exports["default"] = _default;