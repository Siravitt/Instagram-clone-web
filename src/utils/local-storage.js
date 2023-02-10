const ACCESS_TOKEN = "ACCESS_TOKEN";
const SEARCH_RESULT = "SEARCH_RESULT";

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const setAccessToken = (accessToken) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
};

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

export const getSearchResult = () =>
  JSON.parse(localStorage.getItem(SEARCH_RESULT));

export const setSearchResult = (searchResult) =>
  localStorage.setItem(SEARCH_RESULT, JSON.stringify(searchResult));

export const removeSearchResult = () => localStorage.removeItem(SEARCH_RESULT);

