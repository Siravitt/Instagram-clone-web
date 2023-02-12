import axios from "../configs/axios";

export const createLike = (postId) => axios.post("/like/create-like", postId);
export const deleteLike = (postId) => axios.delete(`/like/delete-like/${postId}`);
export const getAllLike = (postId) => axios.get(`/like/get-all-like/${postId}`);
