import axios from "../configs/axios";

export const createImage = (input) => axios.post("/post/post-image", input);
export const getAllPost = () => axios.get("/post/get-all-post");
export const getProfilePost = () => axios.get("/post/get-profile-post");
export const getPostById = (postId) => axios.get(`/post/get-post-id/${postId}`);
