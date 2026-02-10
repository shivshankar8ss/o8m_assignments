import { useEffect, useState } from "react";
import { fetchBlogs } from "../api/blog.api.js";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs()
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (!blogs.length) return <p>No blogs published yet</p>;

  return (
    <section>
      <h1>Blogs</h1>

      {blogs.map((blog) => (
        <div key={blog._id} style={{ marginBottom: "20px" }}>
          <h2>{blog.title}</h2>
          <p>{blog.metaDescription}</p>

          <Link to={`/blog/${blog.slug}`}>Read more</Link>
        </div>
      ))}
    </section>
  );
};

export default BlogList;
