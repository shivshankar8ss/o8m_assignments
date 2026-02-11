import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogBySlug } from "../api/blog.api";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlogBySlug(slug).then((data) => {
      setBlog(data);
    });
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading article...
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          {blog.title}
        </h1>

        {/* Meta description */}
        {blog.metaDescription && (
          <p className="mt-6 text-lg text-gray-600">
            {blog.metaDescription}
          </p>
        )}

        {/* Divider */}
        <div className="my-10 border-t border-gray-200"></div>

        {/* Blog Content */}
        <div
          className="prose prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

      </div>
    </article>
  );
};

export default BlogDetail;
