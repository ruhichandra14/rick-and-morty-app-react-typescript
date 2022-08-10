import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";
import { CHARACTER_DETAIL_QUERY } from "../queries/queries";
import { API_URL } from "../constants/constants";

export const useGetCharacterDetail = (
  key: (string | undefined)[],
  characterId: number
) => {
  const graphQLClient = new GraphQLClient(API_URL);
  const fetchData = async () =>
    await graphQLClient.request(CHARACTER_DETAIL_QUERY(characterId));
  return useQuery(key, fetchData, {
    refetchOnWindowFocus: false,
  });
};
