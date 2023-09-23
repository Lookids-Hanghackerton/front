import { COOKIE_NAME, getCookie, setCookie } from "@/lib/cookie/cookie";
import { UserAtom } from "@/states/atom/user.atom";
import axios, { CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
};

export const api = axios.create(config);

api.interceptors.request.use(config => {
  const token = getCookie(COOKIE_NAME);

  if (token !== undefined && token !== null) {
    config.headers["AccessKey"] = token.accessKey;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // status code 403
    if (error.response?.status === 403 && !originalRequest._retry) {
      console.log("액세스 토큰 만료");
      originalRequest._retry = true;

      try {
        const userData = getCookie(COOKIE_NAME);

        const response = await api.get("/reissue", {
          headers: {
            RefreshKey: userData?.refreshKey,
          },
        });
        const accessKey = response.data.data.accessKey;

        const prev = getCookie(COOKIE_NAME);
        const next = { ...prev, accessKey } as UserAtom;

        setCookie(COOKIE_NAME, next);

        originalRequest.headers["AccessKey"] = accessKey;
        originalRequest._retry = false;

        return axios(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }

    return Promise.reject(error);
  },
);
