import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: 'https://antique-weapons-server.vercel.app/',
  timeout: 10000,
});

export default AxiosInstance;