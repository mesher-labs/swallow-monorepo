import { createClient } from "urql";

export const getShortCuts = async () => {
  const APIURL = "https://api.thegraph.com/subgraphs/name/evergreengh/swallow";

  const shortcutsQuery = `
  query{
    shortCuts {
      id
      name
      endpoint
      selector
    }
    userParams {
      id
      name
      value
      shortcut {
        id
      }
    }
  }
` as string;

  const client = createClient({
    url: APIURL,
  });

  const variables = { id: "0x1293ab17ec6f3881d9612c3b09bcd7d71e5d4d1243c74a55dead887a35d32383" };

  const result = await client.query(shortcutsQuery, variables).toPromise();
  console.log(result);
};

getShortCuts();
