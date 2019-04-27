"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (router) {
  // Create a new cour
  router.post("/cours", _passport.requireAuth, _courController.create);

  // Retrieve all Users
  router.get("/cours", _passport.requireAuth, _courController.findAll);

  // Retrieve a single Note with courId
  router.get("/cours/:courId", _passport.requireAuth, _courController.findOne);

  // Update a Note with courId
  router.put("/cours/:courId", _passport.requireAuth, _courController.update);

  // Delete a Note with noteId
  router.delete("/cours/:courId", _passport.requireAuth, _courController.remove);
};

var _passport = require("../config/passport");

var _courController = require("../controllers/courController.js");