const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    payment_method: {
      type: String,
      required: true,
      default: "esewa",
    },
    transaction_code: String,
    amount: {
      type: Number,
      required: true,
    },
    products: [
      {
        product: {
          type: String,
          required: true,
          default: "Test",
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    status: {
      type: String,
      required: true,
      enum: ["cancelled", "paid", "shipping", "delivered"],
      default: "cancelled",
    },
    address: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
