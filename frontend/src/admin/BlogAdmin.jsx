import { useState } from "react";
import api from "../api/axios.js";

const BlogAdmin = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
    status: "draft"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/blog", form);
      alert("Blog saved successfully");
      setForm({
        title: "",
        content: "",
        metaTitle: "",
        metaDescription: "",
        status: "draft"
      });
    } catch (err) {
      alert("Error saving blog");
      console.error(err);
    }
  };

  return (
    <section>
      <h1>Blog Admin</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="content"
          placeholder="Blog content (HTML)"
          value={form.content}
          onChange={handleChange}
        />

        <input
          name="metaTitle"
          placeholder="Meta title"
          value={form.metaTitle}
          onChange={handleChange}
        />

        <input
          name="metaDescription"
          placeholder="Meta description"
          value={form.metaDescription}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>

        <button type="submit">Save Blog</button>
      </form>
    </section>
  );
};

export default BlogAdmin;
