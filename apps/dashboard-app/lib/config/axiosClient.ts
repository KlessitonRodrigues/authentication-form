import axios from "axios";

const URI = "http://localhost:3005";

export const axiosClient = axios.create({ baseURL: URI });
