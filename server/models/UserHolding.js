const mongoose = require("mongoose");

const UserHoldingSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    bonds_id: {
        type: String,
        required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
);

module.exports = mongoose.model("UserHolding", UserSchema);