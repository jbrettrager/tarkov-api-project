import React from "react";

export default function checkHighestTrader(item) {
  let allTraderPrices = item.sellFor;
  let filteredHighestPrice = { price: 0, priceRUB: 0, source: "" };
  //this an array of objects, with the structure being price, priceRUB, source
  //we want to go through, take out the flea price, and pick out the highest trader priceRUB
  //possibly display in USD if the highest is PK?
  for (let i = 0; i < allTraderPrices.length; i++) {
    if (allTraderPrices[i].source != "fleaMarket") {
      if (allTraderPrices[i].priceRUB > filteredHighestPrice.priceRUB) {
        filteredHighestPrice.price = allTraderPrices[i].price;
        filteredHighestPrice.priceRUB = allTraderPrices[i].priceRUB;
        filteredHighestPrice.source = allTraderPrices[i].source;
      }
    }
    if (allTraderPrices[i].source == "fleaMarket") {
        filteredHighestPrice.fleaPriceRUB = allTraderPrices[i].priceRUB
    }
  }
  //this for loop checks for the highest trader so let's add an image too to show who it is
  if(filteredHighestPrice.source == "prapor") {
    filteredHighestPrice.source = "Prapor"
    filteredHighestPrice.sourceImg = "https://assets.tarkov.dev/54cb50c76803fa8b248b4571.webp"
  }
  if(filteredHighestPrice.source == "therapist") {
    filteredHighestPrice.source = "Therapist"
    filteredHighestPrice.sourceImg = "https://assets.tarkov.dev/54cb57776803fa99248b456e.webp"
  }
  if(filteredHighestPrice.source == "fence") {
    filteredHighestPrice.source = "Fence"
    filteredHighestPrice.sourceImg = "https://assets.tarkov.dev/579dc571d53a0658a154fbec.webp"
  }
  if(filteredHighestPrice.source == "skier") {
    filteredHighestPrice.source = "Skier"
    filteredHighestPrice.sourceImg = "https://assets.tarkov.dev/58330581ace78e27b8b10cee.webp"
  }
  if(filteredHighestPrice.source == "peacekeeper") {
    filteredHighestPrice.source = "Peacekeeper"
    filteredHighestPrice.sourceImg = "https://assets.tarkov.dev/5935c25fb3acc3127c3d8cd9.webp"
  }
  if(filteredHighestPrice.source == "mechanic") {
    filteredHighestPrice.source = "Mechanic"
    filteredHighestPrice.sourceImg = "https://assets.tarkov.dev/5a7c2eca46aef81a7ca2145d.webp"
  }
  if(filteredHighestPrice.source == "ragman") {
    filteredHighestPrice.source = "Ragman"
    filteredHighestPrice.sourceImg = "https://assets.tarkov.dev/5ac3b934156ae10c4430e83c.webp"
  }
  if(filteredHighestPrice.source == "jaeger") {
    filteredHighestPrice.source = "Jaeger"
    filteredHighestPrice.sourceImg = "https://assets.tarkov.dev/5c0647fdd443bc2504c2d371.webp"
  }
  return filteredHighestPrice;
}

