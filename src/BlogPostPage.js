import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogPostById } from "./fakeData";
import Markdown from 'markdown-to-jsx';
import Code from "./Code";

const BlogPostPage = () => {
    const { postId } = useParams();
    const [markdownText, setMarkdownText] = useState("");

    useEffect(() => {
      const fetchMarkdown = async () => {
        try {
          const response = await fetch(`${process.env.PUBLIC_URL}/blogs/${postId}.md`);
          const content = await response.text();
          setMarkdownText(content);
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchMarkdown();
    }, []);
    

    return (
        <article className="article">
            <div className="container">
                <div className="post-wrapper">
                    <Markdown options={{overrides:{Code:{component: Code}}}}>
                        {markdownText}
                    </Markdown>
                </div>
            </div>
        </article>
      );
};

export default BlogPostPage;