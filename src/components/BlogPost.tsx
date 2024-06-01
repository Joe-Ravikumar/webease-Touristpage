import React from "react";

interface BlogPostProps {
  title: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content }) => (
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-5">
    <h2 className="text-lg font-bold">{title}</h2>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default BlogPost;
