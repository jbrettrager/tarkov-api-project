export default function checkHighestTrader(item) {
  let allTraderPrices = item.sellFor;
  let filteredHighestPrice = { price: 0, priceRUB: 0, fleaPriceRUB: 0, source: "" };
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
    if (allTraderPrices[i].source === "fleaMarket") {
      filteredHighestPrice.fleaPriceRUB = allTraderPrices[i].priceRUB;
    }
  }
  //this for loop checks for the highest trader so let's add an image too to show who it is
  if (filteredHighestPrice.source === "prapor") {
    filteredHighestPrice.source = "Prapor";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/54cb50c76803fa8b248b4571.webp";
  }
  if (filteredHighestPrice.source === "therapist") {
    filteredHighestPrice.source = "Therapist";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/54cb57776803fa99248b456e.webp";
  }
  if (filteredHighestPrice.source === "fence") {
    filteredHighestPrice.source = "Fence";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/579dc571d53a0658a154fbec.webp";
  }
  if (filteredHighestPrice.source === "skier") {
    filteredHighestPrice.source = "Skier";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/58330581ace78e27b8b10cee.webp";
  }
  if (filteredHighestPrice.source === "peacekeeper") {
    filteredHighestPrice.source = "Peacekeeper";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/5935c25fb3acc3127c3d8cd9.webp";
  }
  if (filteredHighestPrice.source === "mechanic") {
    filteredHighestPrice.source = "Mechanic";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/5a7c2eca46aef81a7ca2145d.webp";
  }
  if (filteredHighestPrice.source === "ragman") {
    filteredHighestPrice.source = "Ragman";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/5ac3b934156ae10c4430e83c.webp";
  }
  if (filteredHighestPrice.source === "jaeger") {
    filteredHighestPrice.source = "Jaeger";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/5c0647fdd443bc2504c2d371.webp";
  }
  //let's also add a way to reformat the number that's returned into something easier to read
  //right now we have an array with 4 elements; price, priceRUB, source, and fleaPriceRUB

  //so we turn the number into a string, maybe place it into a different element just so that we can easily access the actual number
  //we check the length, if the length is greater than 3, add a space
  //but, we check backwards then and add spaces every 3
  //we can have some sort of counter? then a sub counter. if the counter totals more than 3, increment the sub counter 3 times and add a space. if it doesn't, then we done.
  // ex. 301550, we check from 0, go between 1 and 5, add a space, check that the remaining length is 3, and then stop.

 filteredHighestPrice.stringPrice = filteredHighestPrice.price.toString();
  filteredHighestPrice.stringPriceRUB =
    filteredHighestPrice.priceRUB.toString();
  filteredHighestPrice.stringPriceFlea =
    filteredHighestPrice.fleaPriceRUB.toString();

  if (filteredHighestPrice.stringPriceRUB.length > 3) {
    let newString = [];
    let strLength = filteredHighestPrice.stringPriceRUB.length;
    let counter = filteredHighestPrice.stringPriceRUB.length;
    let subCount = 0;
    for (let i = strLength - 1; i > -1; i--) {
        newString.unshift(filteredHighestPrice.stringPriceRUB[i]);
        counter--;
        subCount++;
        if (subCount === 3) {
          newString.unshift(' ');
          subCount = 0;
        }
    }
    newString = newString.join('')
    filteredHighestPrice.stringPriceRUB = newString;
  }
  if (filteredHighestPrice.stringPrice.length > 3) {
    let newString = [];
    let strLength = filteredHighestPrice.stringPrice.length;
    let counter = filteredHighestPrice.stringPrice.length;
    let subCount = 0;
    for (let i = strLength - 1; i > -1; i--) {
        newString.unshift(filteredHighestPrice.stringPrice[i]);
        counter--;
        subCount++;
        if (subCount === 3) {
          newString.unshift(' ');
          subCount = 0;
        }
    }
    newString = newString.join('')
    filteredHighestPrice.stringPrice = newString;
  }
  if (filteredHighestPrice.stringPriceFlea.length > 3) {
    let newString = [];
    let strLength = filteredHighestPrice.stringPriceFlea.length;
    let counter = filteredHighestPrice.stringPriceFlea.length;
    let subCount = 0;
    for (let i = strLength - 1; i > -1; i--) {
        newString.unshift(filteredHighestPrice.stringPriceFlea[i]);
        counter--;
        subCount++;
        if (subCount === 3) {
          newString.unshift(' ');
          subCount = 0;
        }
    }
    newString = newString.join('')
    filteredHighestPrice.stringPriceFlea = newString;
  }
 
  return filteredHighestPrice;
}
