import axios from "axios";

const registerUserApi = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

const registerMiddleware = async data => {
  const { email, password } = data.user;
  const response = await registerUserApi.post(
    "http://localhost:9000/register",
    { email, password }
  );
  console.log(response.data);
  return response;
};

export default registerMiddleware;
