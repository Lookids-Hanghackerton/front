import { UserAtom } from "@/states/atom/user.atom";
import Cookies from "universal-cookie";

export const COOKIE_NAME = "kikids-cookie";

const cookies = new Cookies();
export const setCookie = (name = COOKIE_NAME, value: UserAtom) => {
  return cookies.set(name, value, { path: "/", expires: new Date(Date.now() + 1000 * 60 * 60 * 24) });
};

export const getCookie = (name = COOKIE_NAME): UserAtom => {
  return cookies.get(name);
};

export const deleteCookie = (name = COOKIE_NAME) => {
  return cookies.remove(name, { path: "/" });
};
