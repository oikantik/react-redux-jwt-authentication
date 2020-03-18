// Side effects Services
export const getAuthToken = () => {
  return JSON.parse(localStorage.getItem("authToken"));
};

export const setAuthToken = token => {
  localStorage.setItem("authToken", JSON.stringify(token));
};

export const removeAuthToken = () => {
  localStorage.removeItem("authToken");
};
