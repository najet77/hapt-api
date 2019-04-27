"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requireAuth = exports.verifySignIn = undefined;

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = require("passport-jwt");

var _user = require("../models/user");

var _user2 = _interopRequireDefault(_user);

var _env = require("./env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var verifySignIn = exports.verifySignIn = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (req.body.email) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(401).json({ code: 147, error: "email cannot be empty" }));

          case 3:
            if (req.body.password) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(401).json({ code: 103, error: "Password cannot be empty" }));

          case 5:
            _context.next = 7;
            return _user2.default.findOne({ email: req.body.email });

          case 7:
            user = _context.sent;

            if (user) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(401).json({ code: 143, error: "Wrong email" }));

          case 10:
            if (user.comparePassword(req.body.password)) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(401).json({ code: 144, error: "Wrong password" }));

          case 12:

            req.user = user;
            return _context.abrupt("return", next());

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);

            console.error(_context.t0);
            return _context.abrupt("return", res.status(500).end());

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 16]]);
  }));

  return function verifySignIn(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var jwtOptions = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromHeader("authorization"),
  secretOrKey: _env.JWTSECRET
};

var jwtLogin = new _passportJwt.Strategy(jwtOptions, function (payload, done) {
  _user2.default.findById(payload.sub).then(function (user) {
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  }, function (err) {
    return done(err, false);
  });
});

_passport2.default.use(jwtLogin);

var requireAuth = exports.requireAuth = _passport2.default.authenticate("jwt", { session: false });