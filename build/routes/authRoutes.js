"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (router) {
  router.post("/signin", _passport.verifySignIn, _authController.signin);
  router.get("/signout", _passport.requireAuth, _authController.signOut);
};

var _passport = require("../config/passport");

var _authController = require("../controllers/authController");