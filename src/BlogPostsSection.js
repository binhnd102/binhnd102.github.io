import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import blogPostData from "./blogPostData.json";


const BlogPostsSection = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    useEffect(() => {
        setBlogPosts(blogPostData);
      }, []);
    return (
    <div className="blogs">
        <div className="container">
            <h2>Blog Posts</h2>
            <div className="row">
            {blogPosts.map((post) => (
                <BlogPost key={post.id} post={post}  />
            ))}
            </div>
        </div>
    </div>
    );
    };

export default BlogPostsSection;

