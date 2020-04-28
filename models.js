const mongoose = require("mongoose");

module.exports = mongoose.model("Contact", {
  fullname: String,
  name: String,
});



