"use strict";

var _env = require("./env");

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configuring the database
_mongoose2.default.Promise = global.Promise;

// Connecting to the database
_mongoose2.default.connect(_env.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(function () {
  console.log("Successfully connected to the database");
}).catch(function (err) {
  console.log("Could not connect to the database. Exiting now...", err);
  process.exit();
});