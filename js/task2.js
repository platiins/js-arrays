/*
Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. 

Purchasing a product. 
The function accepts the name of a product and marks it as bought.
*/

// ORIGINAL LIST

const groceriesList = [
  { name: "apples", amount: 2, isBought: true },
  { name: "carrots", amount: 5, isBought: true },
  { name: "milk", amount: 1, isBought: false },
  { name: "eggs", amount: 10, isBought: false },
  { name: "butter", amount: 1, isBought: true },
];

// ADDING ITEM TO THE LIST:

function addItem(name, amount) {
  let existingItem = groceriesList.findIndex((item) => item.name === name);

  if (existingItem >= 0) {
    groceriesList[existingItem].amount += amount;
  } else {
    groceriesList.push({ name: name, amount: amount, isBought: false });
  }
}

addItem("apples", 5);
addItem("chocolate", 1);

console.log(groceriesList);

// PURCHASING THE ITEM:

function purchaseItem(name) {
  let itemFromList = groceriesList.findIndex((item) => item.name === name);

  if (itemFromList >= 0) {
    groceriesList[itemFromList].isBought = true;
  }
}

purchaseItem("milk");
purchaseItem("candy");

console.log(groceriesList);
