import { useQuery, useQueryClient } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const API_URL = `https://api.thegraph.com/subgraphs/name/messari/aave-v2-polygon-extended`;

const graphQLClient = new GraphQLClient(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  cache: "no-cache",
});

export const useGetAaveCurrentAPY = () => {
  return useQuery(
    ["aaveCurrentAPY"],
    async () => {
      const { markets } = await graphQLClient.request(gql`
        query {
          markets(first: 200) {
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
      console.log(markets);
      return markets;
    },
    {
      cacheTime: 0,
    },
  );
};
