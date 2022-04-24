const mongoose = require("mongoose");

const BondSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    targetamount: {
      type: Number,
      required: true,
    },
    currentamount: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
    returncategories:{
      type: String,
      required: true,
    },
    returnamount:{
      type: String,
      required: true,
    }
  },
);

module.exports = mongoose.model("Bond", UserSchema);