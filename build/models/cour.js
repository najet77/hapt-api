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

var courSchema = _mongoose2.default.Schema({
  number: Number,
  title: String,
  tutor: { type: _mongoose2.default.Schema.Types.ObjectId, ref: "User" },
  formation: { type: _mongoose2.default.Schema.Types.ObjectId, ref: "Formation" }
}, {
  timestamps: true
});

courSchema.plugin(_mongooseAutoIncrement2.default.plugin, {
  model: "Cour",
  field: "number",
  startAt: 1,
  incrementBy: 1
});

courSchema.post("save", function (cour) {
  Formation.findByIdAndUpdate(cour.formation, {
    $push: { cours: cour._id }
  }).catch(function (err) {
    console.error(err.message);
    throw new Error(err.message);
  });
});

courSchema.post("findOneAndRemove", function (cour) {
  Formation.findByIdAndUpdate(cour.formation, {
    $pull: { cours: cour._id }
  }).catch(function (err) {
    console.error(err.message);
    throw new Error(err.message);
  });
});

exports.default = _mongoose2.default.model("Cour", courSchema);