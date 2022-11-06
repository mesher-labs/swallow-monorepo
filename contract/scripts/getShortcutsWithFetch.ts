import fetch from "isomorphic-unfetch";

fetch("https://api.thegraph.com/subgraphs/name/evergreengh/swallow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
        {
            shortcuts {
            id
            index
            shortcutType
            userParams {
                name
                value
            }
            endpoint
            isReady
            }
        }
    `,
    variables: {},
  }),
})
  .then((res) => res.json())
  .then((result) => console.log(result.data));
