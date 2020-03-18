import axios from "axios";

const loginUserApi = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

const loginMiddleware = async data => {
  const { email, password } = data.user;
  const response = await loginUserApi.post("http://localhost:9000/login", {
    email,
    password
  });
  return response;
};

export default loginMiddleware;
