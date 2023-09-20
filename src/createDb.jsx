import React from "react";

function createDb() {
  fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `{
          items {
            id
            name
            shortName
            wikiLink
            gridImageLink
            sellFor {
                price
                priceRUB
                source
            }
            properties {
                __typename
                }
          }
      }`,
    }),
  })
    .then((r) => r.json())
    .then((data) => console.log("data returned:", data));
}

export default createDb;
