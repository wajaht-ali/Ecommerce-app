import mongoose from "mongoose";
const NewsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const NewsletterModel = mongoose.model("newsletter", NewsletterSchema);
export default NewsletterModel;
