"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator = require("validator");

var _validator2 = _interopRequireDefault(_validator);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = _mongoose2.default.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  initials: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: function validate(value) {
      return _validator2.default.isEmail(value);
    }
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "tutor", "student"],
    default: "student"
  },
  deleted: { type: Boolean, default: false }
}, {
  timestamps: true
});

// userSchema.index({email:1}, {unique:true})

userSchema.pre("save", function (next) {
  var user = this;
  _bcryptjs2.default.hash(user.password, 10, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    return next();
  });
});

userSchema.pre("findOneAndUpdate", function (next) {
  var user = this._update.$set;
  if (user.password) {
    _bcryptjs2.default.hash(user.password, 10, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      return next();
    });
  }
  return next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return _bcryptjs2.default.compareSync(candidatePassword, this.password);
};

userSchema.methods.getInitials = function () {
  return this.firstName[0] + this.lastName[0];
};

exports.default = _mongoose2.default.model("User", userSchema);