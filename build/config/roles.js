"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var requireAdmin = exports.requireAdmin = function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(401).send("Unauthorized role");
  }
  return next();
};