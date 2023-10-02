import { createStandaloneToast } from "@chakra-ui/react";
import { MutationCache, QueryCache, QueryClientConfig } from "@tanstack/react-query";

const { toast } = createStandaloneToast();

function queryErrorHandler(error: unknown) {
  const title = error instanceof Error ? error.message : "error connecting to server";

  return toast({ title, status: "error", variant: "subtle", isClosable: true });
}

export const config: QueryClientConfig = {
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: queryErrorHandler,
  }),
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 20, // 10min
      // cacheTime: 1000 * 30, // 15min,
      // refetchOnWindowFocus: false,
      // refetchOnReconnect: true,
    },
  },
};