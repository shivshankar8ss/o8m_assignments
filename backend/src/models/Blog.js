import mongoose from "mongoose";
import slugify from "slugify";

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
    metaTitle: {
      type: String
    },
    metaDescription: {
      type: String
    },
    featuredImage: {
      type: String
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft"
    }
  },
  { timestamps: true }
);

// Auto-generate slug
blogSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true });
  }
  next();
});

export default mongoose.model("Blog", blogSchema);
