import { api } from "@/utils/axios/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { COOKIE_NAME, deleteCookie, getCookie, setCookie } from "@/lib/cookie/cookie";
import { UserAtom } from "@/states/atom/user.atom";

export const AUTH_API = {
  getUser: "mypage/",
  login: "callback/",
};

export type UnKnownUser = UserAtom | null | undefined;

export async function getUser(user: UnKnownUser): Promise<UnKnownUser> {
  if (!user) return null;

  const { data } = await api.get(`${AUTH_API.getUser}${user}`, {
    headers: { AccessKey: user.accessKey },
  });

  return data;
}

const UseUserQuery = () => {
  const queryClient = useQueryClient();
  const userCookieData = getCookie(COOKIE_NAME);

  const { data: userData } = useQuery([AUTH_API.getUser], (): Promise<UnKnownUser> => getUser(userCookieData), {
    onSuccess: received => {
      console.log(received); // 이거 null
      // if (!received) {

      //   deleteCookie();
      // } else {
      //   setCookie(COOKIE_NAME, received);
      // }
    },
    staleTime: 10000,
    cacheTime: 15000,
  });

  function updateUser(user: UnKnownUser) {
    if (!user) return console.log("no user found to update");

    queryClient.setQueryData([AUTH_API.getUser], user);
    setCookie(COOKIE_NAME, user);
  }

  function clearUser() {
    queryClient.setQueryData([AUTH_API.getUser], null);
    deleteCookie();
  }

  return { user: userCookieData, updateUser, clearUser };
};

export default UseUserQuery;
