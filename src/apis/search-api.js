import axios from "../configs/axios";

export const searchApi = (input) => axios.post("/search/search-users", input);
export const searchById = (input) => axios.post("/search/search-user-id", input);
