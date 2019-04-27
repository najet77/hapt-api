"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseAutoIncrement = require("mongoose-auto-increment");

var _mongooseAutoIncrement2 = _interopRequireDefault(_mongooseAutoIncrement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongooseAutoIncrement2.default.initialize(_mongoose2.default.connection);

var classeSchema = _mongoose2.default.Schema({
  number: Number,
  title: String,
  students: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: "User" }],
  formations: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: "Formation" }]
}, {
  timestamps: true
});

classeSchema.plugin(_mongooseAutoIncrement2.default.plugin, {
  model: 'Classe',
  field: 'number',
  startAt: 1,
  incrementBy: 1
});

exports.default = _mongoose2.default.model("Classe", classeSchema);