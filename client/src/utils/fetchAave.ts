import { useQuery, useQueryClient } from "react-query";

// aave v2 polygon
/** example response
 {
  "data": {
    "market": {
      "id": "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      "name": "Aave Matic Market DAI",
      "inputToken": {
        "id": "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        "symbol": "DAI",
        "decimals": 18
      },
      "rates": [
        {
          "rate": "7.2546994780121251",
          "side": "BORROWER",
          "type": "STABLE"
        },
        {
          "rate": "5.3546994780121251",
          "side": "BORROWER",
          "type": "VARIABLE"
        },
        {
          "rate": "3.8727932447793897",
          "side": "LENDER",
          "type": "VARIABLE"
        }
      ]
    }
  }
}
 */

const tokenAddress = "";
fetch("https://api.thegraph.com/subgraphs/name/messari/aave-v2-polygon", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
      {
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
    `,
    variables: {},
  }),
})
  .then((res) => res.json())
  .then((result) => console.log(result.data));
