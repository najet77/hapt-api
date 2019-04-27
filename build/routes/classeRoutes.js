"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (router) {
  // Create a new classe
  router.post("/classes", _passport.requireAuth, _classeController.create);

  // Retrieve all Users
  router.get("/classes", _passport.requireAuth, _classeController.findAll);

  // Retrieve a single Note with classeId
  router.get("/classes/:classeId", _passport.requireAuth, _classeController.findOne);

  // Update a Note with classeId
  router.put("/classes/:classeId", _passport.requireAuth, _classeController.update);

  // Delete a Note with noteId
  router.delete("/classes/:classeId", _passport.requireAuth, _classeController.remove);
};

var _passport = require("../config/passport");

var _classeController = require("../controllers/classeController.js");