import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys.constant";
import { getFanLetters } from "./queryFunctions";

export const useGetFanLetters = () =>
  useQuery({
    queryKey: [QUERY_KEYS.FANLETTERS],
    queryFn: getFanLetters,
  });
