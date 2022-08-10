import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";
import { CHARACTERSLIST_QUERY } from "../queries/queries";
import { API_URL } from "../constants/constants";
import { TListvariables } from "./typedef";

export const useGetCharacterList = (
  key: (string | number)[],
  variables: TListvariables
) => {
  const graphQLClient = new GraphQLClient(API_URL);
  const fetchData = async () =>
    await graphQLClient.request(CHARACTERSLIST_QUERY(variables?.page));
  return useQuery(key, fetchData, {
    refetchOnWindowFocus: false,
  });
};
