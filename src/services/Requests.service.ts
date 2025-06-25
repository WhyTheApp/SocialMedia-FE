import axios from "axios";
import { getToken, removeToken, setToken } from "./TokenManager";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    const { url } = response.config;
    if (
      [
        "authentication/login",
        "authentication/register",
        "authentication/refresh-token",
        "authentication/verify-email",
      ].includes(url!) &&
      response.data &&
      response.data.token
    ) {
      setToken(response.data.token);
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      originalRequest.url &&
      originalRequest.url.startsWith("authentication/")
    ) {
      return Promise.reject(error);
    }

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const refreshResponse = await api.post("authentication/refresh-token");
        if (refreshResponse.data && refreshResponse.data.token) {
          setToken(refreshResponse.data.token);
        }
        return api(originalRequest);
      } catch (refreshError) {
        removeToken();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
