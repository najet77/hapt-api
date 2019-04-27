"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (router) {
  // Create a new formation
  router.post("/formations", _passport.requireAuth, _formationController.create);

  // Retrieve all Users
  router.get("/formations", _passport.requireAuth, _formationController.findAll);

  // Retrieve a single Note with formationId
  router.get("/formations/:formationId", _passport.requireAuth, _formationController.findOne);

  // Update a Note with formationId
  router.put("/formations/:formationId", _passport.requireAuth, _formationController.update);

  // Delete a Note with noteId
  router.delete("/formations/:formationId", _passport.requireAuth, _formationController.remove);
};

var _passport = require("../config/passport");

var _formationController = require("../controllers/formationController.js");