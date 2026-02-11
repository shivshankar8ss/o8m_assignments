import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../api/blog.api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Title */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-semibold text-gray-900">
            Insights & Articles
          </h1>
          <p className="mt-3 text-gray-500">
            Explore our latest thoughts on AI, digital transformation and enterprise growth.
          </p>
        </div>

        {/* Blog Grid */}
        {blogs.length === 0 ? (
          <div className="text-center text-gray-500">
            No blogs published yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
              >
                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between h-full">

                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {blog.title}
                    </h2>

                    <p className="text-gray-600 text-sm line-clamp-3">
                      {blog.metaDescription}
                    </p>
                  </div>

                  <Link
                    to={`/blog/${blog.slug}`}
                    className="mt-6 inline-block text-blue-600 font-medium hover:underline"
                  >
                    Read more →
                  </Link>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
