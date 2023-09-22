import axios, { CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
};

export const api = axios.create(config);

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("accessKey");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  // error => Promise.reject(error),
);

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // status code 401
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshKey = localStorage.getItem("refreshKey");
        const response = await axios.post("/api/refresh-token", { refreshKey });
        const { token } = response.data;

        localStorage.setItem("accessKey", token);

        originalRequest.headers.Authorization = token;
        return axios(originalRequest);
      } catch (error) {
        console.log(error);
        // Handle refresh token error or redirect to login
      }
    }

    return Promise.reject(error);
  },
);
