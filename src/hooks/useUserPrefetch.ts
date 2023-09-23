import { AUTH_API, getUser } from "@hooks/useUser";
import { GetServerSidePropsContext } from "next";
import { QueryClient } from "@tanstack/react-query";
import { COOKIE_NAME } from "@/lib/cookie/cookie";
import { UserAtom } from "@/states/atom/user.atom";

/**
 * @param context GetServerSidePropsContext
 */
const prefetchUserData = async (context: GetServerSidePropsContext) => {
  const userData: UserAtom | null = context.req.cookies[COOKIE_NAME]
    ? JSON.parse(context.req.cookies[COOKIE_NAME] || "")
    : null;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([AUTH_API.getUser], () => getUser(userData));
};

export default prefetchUserData;
