import axios from "../configs/axios";

export const getUserData = (id) => axios.post("/search/search-user-posts", id);

