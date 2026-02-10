import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      unique: true,
      index: true
    },
    content: {
      type: String,
      required: true
    },
    metaTitle: String,
    metaDescription: String,
    featuredImage: String,
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
