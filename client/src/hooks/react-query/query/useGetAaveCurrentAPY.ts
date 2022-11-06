import { useQuery, useQueryClient } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const API_URL = `https://api.thegraph.com/subgraphs/name/messari/aave-v2-polygon`;

const graphQLClient = new GraphQLClient(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
});

export const useGetAaveCurrentAPY = (tokenAddress: string) => {
  const queryClient = useQueryClient();
  return useQuery(["allShortcuts"], async () => {
    const { shortcuts } = await graphQLClient.request(gql`
      query {
        market (id: ${tokenAddress.toLowerCase()}) {
          id
          name
          inputToken {
            id
            symbol 
            decimals
          }
          rates {
            rate
            side
            type
          }
        }
      }
    `);
    return shortcuts;
  });
};
