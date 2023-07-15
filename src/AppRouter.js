import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import BlogPostsSection from "./BlogPostsSection";
import BlogPostPage from "./BlogPostPage";
import Header from "./Header";
import AboutMe from "./AboutMe";
import MarkdownComponent from "./MarkdownComponent";

const AppRouter = () => {
    const basename = process.env.PUBLIC_URL;
    return (
        <Router>
        <Header />
        <Routes>
            <Route path="/" element={<BlogPostsSection />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/markdown" element={<MarkdownComponent />} />
        </Routes>
        </Router>
    );
    };

export default AppRouter;
