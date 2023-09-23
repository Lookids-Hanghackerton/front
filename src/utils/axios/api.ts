import { COOKIE_NAME, getCookie, setCookie } from "@/lib/cookie/cookie";
import axios, { CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
};

export const api = axios.create(config);

api.interceptors.request.use(config => {
  const token = getCookie(COOKIE_NAME);

  if (token !== undefined && token !== null) {
    config.headers.Authorization = token.accessKey;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // status code 401
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        console.log("리프레시 만료");
        // const refreshKey = getCookie("refreshKey");
        // const response = await axios.post("/api/refresh-token", { refreshKey });
        // const { token } = response.data;

        // setCookie("accessKey", token);

        // originalRequest.headers.Authorization = token;
        return axios(originalRequest);
      } catch (error) {
        console.log(error);
        // Handle refresh token error or redirect to login
      }
    }

    return Promise.reject(error);
  },
);
