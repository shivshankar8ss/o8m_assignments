import api from "./axios.js";

export const fetchBlogs = async () => {
  const response = await api.get("/blog");
  return response.data;
};

export const fetchBlogBySlug = async (slug) => {
  const response = await api.get(`/blog/${slug}`);
  return response.data;
};
