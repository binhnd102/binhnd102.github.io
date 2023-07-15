import React, { useEffect, useState } from "react";
import Markdown from 'markdown-to-jsx';
import Code from "./Code";

const MarkdownComponent = () => {
  const [markdownText, setMarkdownText] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch("example.md");
      const content = await response.text();
      setMarkdownText(content);
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

export default MarkdownComponent;