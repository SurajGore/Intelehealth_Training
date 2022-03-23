const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema(
  {
    name: String,
    feedback: String,
    email: String,
    telephone: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", CustomerSchema);