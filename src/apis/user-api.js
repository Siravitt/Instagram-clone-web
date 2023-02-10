import axios from "../configs/axios";

export const getUserData = (id) => axios.post("/search/search-user-posts", id);
export const getIsFollow = (id) => axios.get(`/search/is-follow/${id}`);
export const onFollow = (id) => axios.post("/search/follow", id);
export const onUnFollow = (id) => axios.delete(`/search/unfollow/${id}`);
