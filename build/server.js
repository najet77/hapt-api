"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _env = require("./config/env");

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

require("./config/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// connect to db


app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

//var routes from'./src/routes/todoListRoutes');

// config routes
app.use("/", _routes2.default);

// listen for requests
app.listen(_env.port, function () {
  console.log("Server is listening on port: " + _env.port);
});