import mongoose from "@/app/configs/dbconnect";

const Schema = mongoose.Schema;
// const objId = Schema.ObjectId;

const productSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required!"] },
    description: { type: String, required: [true, "description is required!"] },
    price: {
      type: Number,
      cast: "{VALUE} is not a number!",
      min: [0, "{VALUE} is not valid!"],
      required: [true, "Price is required!"],
    },
    images: { type: String, required: [true, "Images is required!"] },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
