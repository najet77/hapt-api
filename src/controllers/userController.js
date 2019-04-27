import User from "../models/user.js";

// Create and Save a new User
export const create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    return res.status(400).json({
      message: "email can not be empty"
    });
  }

  // Create a User
  const user = new User(req.body);
  const initials = User.getInitials();
  user.initials = initials;

  // Save User in the database
  user
    .save()
    .then(data => {
      return res.status(201).json(data);
    })
    .catch(err => {
      return res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve and return all users from the database.
export const findAll = (req, res) => {
  if (req.query.page && req.query.limit) {
    return User.find()
      .skip(req.query.page * req.query.limit)
      .limit(req.query.limit)
      .exec()
      .then(users => {
        return res.status(200).json(users);
      })
      .catch(err => {
        return res.status(500).send({
          message: err.message || "Some error occurred while retrieving users."
        });
      });
  }
  return User.find()
    .then(users => {
      return res.status(200).json(users);
    })
    .catch(err => {
      return res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single user with a userId
export const findOne = (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      return res.status(200).json(user);
    })
    .catch(err => {
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
export const update = (req, res) => {
  // Find user and update it with the request body
  User.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      return res.status(200).json(user);
    })
    .catch(err => {
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
export const remove = (req, res) => {
  User.findByIdAndRemove(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.userId
        });
      }
      return res.status(204).json({ message: "User deleted successfully!" });
    })
    .catch(err => {
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
