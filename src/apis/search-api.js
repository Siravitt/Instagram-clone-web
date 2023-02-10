import axios from "../configs/axios";

export const searchApi = (input) => axios.post("/search/search-users", input);
export const searchById = (id) => axios.get(`/search/search-user-id/${id}`);
