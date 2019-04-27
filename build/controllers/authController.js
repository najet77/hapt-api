"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOut = exports.signin = undefined;

var _jwtSimple = require("jwt-simple");

var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

var _env = require("../config/env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tokenForUser = function tokenForUser(user, exp) {
  return _jwtSimple2.default.encode({
    sub: user.id,
    exp: exp
  }, _env.JWTSECRET);
};

var signin = exports.signin = function signin(req, res) {
  res.send({
    token: tokenForUser(req.user, Math.round(Date.now() / 1000 + 120 * 60)),
    user: req.user
  });
};

var signOut = exports.signOut = function signOut(req, res) {
  res.status(200).send({ token: 0 });
};