import axios from "axios";

const Axios = axios.create({
  baseURL: "https://mern-stack-2qnr.onrender.com/api/v1", // Replace with your backend URL
});

export default Axios;
