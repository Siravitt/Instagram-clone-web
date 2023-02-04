import axios from "../configs/axios";

export const searchApi = (input) => axios.post("/search/search-users", input);
