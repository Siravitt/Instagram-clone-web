import axios from "../configs/axios";

export const postImage = (input) => axios.post("/post/post-image", input);
export const getAllPost = () => axios.get("/post/get-post");
export const getAllLike = (postId) => axios.get(`/post/like/${postId}`);
export const createLike = (postId) => axios.post("/post/create-like", postId);
export const unLike = (postId) => axios.delete(`/post/unLike/${postId}`);
