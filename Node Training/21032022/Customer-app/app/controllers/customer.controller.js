const Customer = require("../models/customer.model");

// Create and Save a new user
exports.create = (req, res) => {
  if (!req.body.email) {
    return res.status(400).send({
      message: "user content can not be empty",
    });
  }

  // Create a user
  const customer = new Customer({
    name: req.body.name || "Untitled Name",
    feedback: req.body.feedback,
    email: req.body.email,
    telephone: req.body.telephone
  });

  // Save user in the database
  customer
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    Customer.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Find a single user with a customerId
exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "user not found with id " + req.params.customerId,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "user not found with id " + req.params.customerId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving user with id " + req.params.customerId,
      });
    });
};

// Update a user identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.email) {
    return res.status(400).send({
      message: "user content can not be empty",
    });
  }

  // Find user and update it with the request body
  Customer.findByIdAndUpdate(
    req.params.customerId,
    {
        name: req.body.name || "Untitled Name",
        feedback: req.body.feedback,
        email: req.body.email,
        telephone: req.body.telephone
    },
    { new: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "user not found with id " + req.params.customerId,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "user not found with id " + req.params.customerId,
        });
      }
      return res.status(500).send({
        message: "Error updating user with id " + req.params.customerId,
      });
    });
};

// Delete a user with the specified customerId in the request
exports.delete = (req, res) => {
    Customer.findByIdAndRemove(req.params.customerId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "user not found with id " + req.params.customerId,
        });
      }
      res.send({ message: "user deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "user not found with id " + req.params.customerId,
        });
      }
      return res.status(500).send({
        message: "Could not delete user with id " + req.params.customerId,
      });
    });
};