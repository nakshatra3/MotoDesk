const mongoose = require("mongoose");

const DealerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    contact: {
      type: Number,
      required: true,
      default: 0,
    },

    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Dealer = mongoose.model("Dealer", DealerSchema);

module.exports = Dealer;