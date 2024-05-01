/*
Create a “groceries list” array. 
Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. 
Write a few functions for working with this array. 

Display the entire list, so that the not yet purchased items go before the bought ones. 
*/

const groceriesList = [
  { name: "apples", amount: 2, isBought: true, type: "fruits&veg" },
  { name: "carrots", amount: 5, isBought: true, type: "fruits&veg" },
  { name: "milk", amount: 1, isBought: false, type: "milk&eggs" },
  { name: "eggs", amount: 10, isBought: false, type: "milk&eggs" },
  { name: "butter", amount: 1, isBought: true, type: "milk&eggs" },
];

// 1ST METHOD:

const sortedGroceriesList = groceriesList.sort(
  (a, b) => a.isBought - b.isBought
);

console.warn("FULL LIST:");
sortedGroceriesList.forEach((item) => console.log(item));

// 2ND METHOD:

const notPurchasedList = groceriesList.filter(
  (item) => item.isBought === false
);

const purchasedList = groceriesList.filter((item) => item.isBought === true);

console.warn("NOT PURCHASED YET:");
notPurchasedList.forEach((item) => console.log(item));

console.warn("ALREADY PURCHASED:");
purchasedList.forEach((item) => console.log(item));

// -------------------------------------------------------

// functions for working with this array:

const additionalProductsToBuy = [
  { name: "fish", amount: 3, isBought: false, type: "meet&fish" },
  { name: "beef", amount: 1, isBought: false, type: "meet&fish" },
  { name: "bananas", amount: 3, isBought: false, type: "fruits&veg" },
  { name: "potatoes", amount: 8, isBought: false, type: "fruits&veg" },
];

// adding additional items from another list:

const updatedList = groceriesList.concat(additionalProductsToBuy);

console.log("UPDATED LIST:");
console.log(updatedList);

//filter not purchased items to separate list:

const notPurchasedUpdatedList = updatedList.filter(
  (item) => item.isBought === false
);

console.error("NOT PURCHASED YET:");
notPurchasedUpdatedList.forEach((item) => console.log(item));

// shows as list what and how much to buy:

const niceList = updatedList.map(
  (item) => `${item.name}, x${item.amount} pieces`
);

console.warn(`LIST WHAT AND HOW MANY:`);
console.log(niceList);
