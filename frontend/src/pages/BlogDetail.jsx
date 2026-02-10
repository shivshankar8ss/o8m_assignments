import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { fetchBlogBySlug } from "../api/blog.api.js";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogBySlug(slug)
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p>Loading blog...</p>;
  if (!blog) return <p>Blog not found</p>;

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle || blog.title}</title>
        <meta
          name="description"
          content={blog.metaDescription}
        />
        <link
          rel="canonical"
          href={`http://localhost:5173/blog/${blog.slug}`}
        />
      </Helmet>

      <article>
        <h1>{blog.title}</h1>

        <div
          dangerouslySetInnerHTML={{
            __html: blog.content
          }}
        />
      </article>
    </>
  );
};

export default BlogDetail;
