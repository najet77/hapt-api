"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (router) {
  // Create a new user
  router.post("/users", _passport.requireAuth, _roles.requireAdmin, _userController.create);

  // Retrieve all Users
  router.get("/users", _passport.requireAuth, _roles.requireAdmin, _userController.findAll);

  // Retrieve a single Note with userId
  router.get("/users/:userId", _passport.requireAuth, _roles.requireAdmin, _userController.findOne);

  // Update a Note with userId
  router.put("/users/:userId", _passport.requireAuth, _roles.requireAdmin, _userController.update);

  // Delete a Note with noteId
  router.delete("/users/:userId", _passport.requireAuth, _roles.requireAdmin, _userController.remove);
};

var _roles = require("../config/roles");

var _passport = require("../config/passport");

var _userController = require("../controllers/userController.js");