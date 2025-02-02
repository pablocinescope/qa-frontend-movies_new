import { BACKEND_URL_MOVIES } from "../const";
import inMemoryJWT from "../../utils/inMemoryJWT";
import axios from "axios";

console.log("BACKEND_URL_MOVIES", BACKEND_URL_MOVIES);
const MoviesClient = axios.create({
  baseURL: BACKEND_URL_MOVIES,
});

MoviesClient.interceptors.request.use(
  (config) => {
    const accessToken = inMemoryJWT.getToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default MoviesClient;
