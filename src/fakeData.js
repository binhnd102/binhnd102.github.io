import blogPostsData from "./blogPostData.json";

export const getBlogPostById = (postId) => {
    const blogPost = blogPostsData.find((post) => Number(post.id) === Number(postId));
    return blogPost;
};