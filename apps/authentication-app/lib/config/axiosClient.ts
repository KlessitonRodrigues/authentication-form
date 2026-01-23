import axios from "axios";

const URI = "http://localhost:3000";

export const axiosClient = axios.create({ baseURL: URI });
