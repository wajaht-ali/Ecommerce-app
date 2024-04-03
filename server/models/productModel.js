import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "category",
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shippping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
const ProductModel = mongoose.model("product", ProductSchema);

export default ProductModel;
