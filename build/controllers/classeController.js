"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.findOne = exports.findAll = exports.create = undefined;

var _classe = require("../models/classe");

var _classe2 = _interopRequireDefault(_classe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Create and Save a new Classe
var create = exports.create = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var classe;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            classe = new _classe2.default(req.body);
            _context.next = 4;
            return client.save().then(function (newClasse) {
              return newClasse;
            });

          case 4:
            classe = _context.sent;
            return _context.abrupt("return", res.status(201).json(client));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

            console.error(_context.t0);
            return _context.abrupt("return", res.status(500).json({ error: _context.t0.message }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 8]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Retrieve and return all classes from the database.
var findAll = exports.findAll = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var classes;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _classe2.default.find().populate({ path: "students", model: "User", select: "-password" }).populate("formations");

          case 3:
            classes = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(classes));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);

            console.error(_context2.t0);
            return _context2.abrupt("return", res.status(500).json({ error: _context2.t0.message }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 7]]);
  }));

  return function findAll(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Find a single classe with a classeId
var findOne = exports.findOne = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var classe;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _classe2.default.findById(req.params.classeId).populate({ path: "students", model: "User", select: "-password" }).populate("formations");

          case 3:
            classe = _context3.sent;

            if (classe) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.status(404).send({
              message: "Classe not found with id " + req.params.classeId
            }));

          case 6:
            return _context3.abrupt("return", res.status(200).json(classe));

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);

            console.error(_context3.t0);
            return _context3.abrupt("return", res.status(500).json({ error: _context3.t0.message }));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 9]]);
  }));

  return function findOne(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Update a classe identified by the classeId in the request
var update = exports.update = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var classe;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _classe2.default.findByIdAndUpdate(req.params.classeId, { $set: req.body }, { new: true });

          case 3:
            classe = _context4.sent;

            if (classe) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.status(404).send({
              message: "Classe not found with id " + req.params.classeId
            }));

          case 6:
            return _context4.abrupt("return", res.status(200).json(classe));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);

            console.error(_context4.t0);
            return _context4.abrupt("return", res.status(500).json({ error: _context4.t0.message }));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 9]]);
  }));

  return function update(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// Delete a classe with the specified classeId in the request
var remove = exports.remove = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var classe;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _classe2.default.findByIdAndRemove(req.params.classeId);

          case 3:
            classe = _context5.sent;

            if (classe) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", res.status(404).send({
              message: "Classe not found with id " + req.params.classeId
            }));

          case 6:
            return _context5.abrupt("return", res.status(204).json({ message: "Classe deleted successfully!" }));

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);

            console.error(_context5.t0);
            return _context5.abrupt("return", res.status(500).json({ error: _context5.t0.message }));

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 9]]);
  }));

  return function remove(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();