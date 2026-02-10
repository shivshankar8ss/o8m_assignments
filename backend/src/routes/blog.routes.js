import express from "express";
import {
  createBlog,
  getPublishedBlogs,
  getBlogBySlug,
  updateBlog,
  deleteBlog
} from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/", createBlog);
router.get("/", getPublishedBlogs);
router.get("/:slug", getBlogBySlug);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
