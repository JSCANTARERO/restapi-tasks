"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uptTask = exports.deleteTask = exports.findOneTask = exports.findAllDoneTask = exports.createTask = exports.findAllTasks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _Task = _interopRequireDefault(require("../models/Task"));

var _getPagination2 = require("../libs/getPagination");

//Importamos el modelo de datos
var ObjectID = require('mongodb').ObjectID; // Mostrar todas las tareas


var findAllTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, title, condition, _getPagination, limit, offset, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(req.query);
            _req$query = req.query, size = _req$query.size, page = _req$query.page, title = _req$query.title;
            condition = title ? {
              title: {
                $regex: new RegExp(title),
                $options: "i"
              }
            } : {};
            _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
            _context.next = 7;
            return _Task["default"].paginate(condition, {
              offset: offset,
              limit: limit
            });

          case 7:
            data = _context.sent;
            // El paginate recibe una consulta
            res.json({
              totalItems: data.totalDocs,
              tasks: data.docs,
              totalPages: data.totalPages,
              currentPage: data.page - 1
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: _context.t0.message || 'Something goes wrong retrieving the tasks'
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function findAllTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //Crear una nueva tarea


exports.findAllTasks = findAllTasks;

var createTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var newTask;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (req.body.title) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", res.status(404).send({
              message: 'Title cannot be empty'
            }));

          case 2:
            _context2.prev = 2;
            newTask = new _Task["default"]({
              title: req.body.title,
              description: req.body.description,
              done: req.body.done ? req.body.done : false
            });
            _context2.next = 6;
            return newTask.save();

          case 6:
            res.json(newTask);
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            res.status(500).json({
              message: _context2.t0.message || 'Something goes wrong creating the task'
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));

  return function createTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Mostrar todas las tareas terminadas


exports.createTask = createTask;

var findAllDoneTask = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Task["default"].find({
              done: true
            });

          case 2:
            tasks = _context3.sent;
            res.json(tasks);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function findAllDoneTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //Buscar una tarea por id


exports.findAllDoneTask = findAllDoneTask;

var findOneTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _id2, _id, task;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _id2 = req.params.id;
            _id = new ObjectID(_id2);
            _context4.next = 5;
            return _Task["default"].findOne({
              _id: _id
            });

          case 5:
            task = _context4.sent;

            if (task) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              message: "Task with id ".concat(_id2, " does not exist")
            }));

          case 8:
            res.status(200).json(task);
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: _context4.t0.message || "Error retrieving Task with id , ".concat(id)
            });

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function findOneTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // El params son los parametros que le enviamos extra en la ruta (:id)
//Eliminar una tarea


exports.findOneTask = findOneTask;

var deleteTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _Task["default"].findByIdAndDelete(id);

          case 4:
            data = _context5.sent;
            res.json({
              message: "'".concat(data.title, "' Task were deleted successfully")
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            res.status(500).json({
              message: "Error deleting Task with id ".concat(id)
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));

  return function deleteTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteTask = deleteTask;

var uptTask = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Task["default"].findByIdAndUpdate(req.params.id, req.body);

          case 2:
            res.json({
              message: 'Task was updated successfully'
            });

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function uptTask(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.uptTask = uptTask;