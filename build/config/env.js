"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoURI = exports.mongoURI = "mongodb://localhost:27017/hapt";
var port = exports.port = process.env.PORT || 3000;
var JWTSECRET = exports.JWTSECRET = "secretjwt";