"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.update = exports.findOne = exports.findAll = exports.create = undefined;

var _user = require("../models/user.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create and Save a new User
var create = exports.create = function create(req, res) {
  // Validate request
  if (!req.body.email) {
    return res.status(400).json({
      message: "email can not be empty"
    });
  }

  // Create a User
  var user = new _user2.default(req.body);
  var initials = _user2.default.getInitials();
  user.initials = initials;

  // Save User in the database
  user.save().then(function (data) {
    return res.status(201).json(data);
  }).catch(function (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating the User."
    });
  });
};

// Retrieve and return all users from the database.
var findAll = exports.findAll = function findAll(req, res) {
  if (req.query.page && req.query.limit) {
    return _user2.default.find().skip(req.query.page * req.query.limit).limit(req.query.limit).exec().then(function (users) {
      return res.status(200).json(users);
    }).catch(function (err) {
      return res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
  }
  return _user2.default.find().then(function (users) {
    return res.status(200).json(users);
  }).catch(function (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while retrieving users."
    });
  });
};

// Find a single user with a userId
var findOne = exports.findOne = function findOne(req, res) {
  _user2.default.findById(req.params.userId).then(function (user) {
    if (!user) {
      return res.status(404).send({
        message: "User not found with id " + req.params.userId
      });
    }
    return res.status(200).json(user);
  }).catch(function (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "User not found with id " + req.params.userId
      });
    }
    return res.status(500).send({
      message: "Error retrieving user with id " + req.params.userId
    });
  });
};

// Update a user identified by the userId in the request
var update = exports.update = function update(req, res) {
  // Find user and update it with the request body
  _user2.default.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true }).then(function (user) {
    if (!user) {
      return res.status(404).send({
        message: "User not found with id " + req.params.userId
      });
    }
    return res.status(200).json(user);
  }).catch(function (err) {
    //   if (err.kind === "ObjectId") {
    //     return res.status(404).send({
    //       message: "User not found with id " + req.params.userId
    //     });
    //   }
    return res.status(500).send({
      message: "Error updating user with id " + req.params.userId
    });
  });
};

// Delete a user with the specified userId in the request
var remove = exports.remove = function remove(req, res) {
  _user2.default.findByIdAndRemove(req.params.userId).then(function (user) {
    if (!user) {
      return res.status(404).send({
        message: "User not found with id " + req.params.userId
      });
    }
    return res.status(204).json({ message: "User deleted successfully!" });
  }).catch(function (err) {
    //   if (err.kind === "ObjectId" || err.name === "NotFound") {
    //     return res.status(404).send({
    //       message: "User not found with id " + req.params.userId
    //     });
    //   }
    return res.status(500).send({
      message: "Could not delete user with id " + req.params.userId
    });
  });
};