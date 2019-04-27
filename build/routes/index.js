"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _authRoutes = require("./authRoutes");

var _authRoutes2 = _interopRequireDefault(_authRoutes);

var _userRoutes = require("./userRoutes");

var _userRoutes2 = _interopRequireDefault(_userRoutes);

var _classeRoutes = require("./classeRoutes");

var _classeRoutes2 = _interopRequireDefault(_classeRoutes);

var _formationRoutes = require("./formationRoutes");

var _formationRoutes2 = _interopRequireDefault(_formationRoutes);

var _courRoutes = require("./courRoutes");

var _courRoutes2 = _interopRequireDefault(_courRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", function (req, res) {
  res.json({ api: "ok" });
});

// authRoutes(router);
// userRoutes(router);
// classeRoutes(router);
// formationRoutes(router);
// courRoutes(router);

exports.default = router;