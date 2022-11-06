import { useQuery, useQueryClient } from "react-query";
import {
  ShortcutTypes,
  ShortcutRes,
} from "../../../common/types/short-cuts.types";
import { GraphQLClient, gql } from "graphql-request";

const API_URL = `https://api.thegraph.com/subgraphs/name/evergreengh/swallow`;

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    //Authorization: `Bearer ${process.env.API_KEY}`
  },
  cache: 'no-cache'
});

export const useGetAllShortcuts = () => {
  const queryClient = useQueryClient();
  return useQuery(["allShortcuts"], async () => {
    const { shortcuts } = await graphQLClient.request(gql`
      query {
        shortcuts {
          id
          index
          shortcutType
          endpoint
          isReady
        }
      }
    `);
    console.log("gogogogogogogog", shortcuts);
    return shortcuts;
  }, {
    cacheTime: 0
  });
};
