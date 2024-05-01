/*
Create an array that describes a shop receipt. 
Each element of the array consists of the name of the product, an amount bought, and price per item. 

Write the following functions:
- Print the receipt out on the screen.
- Counting the sum of the purchase.
- Extracting the most expensive item on the receipt.
- Counting an average item price on the receipt.
*/

const receipt = [
  {
    productName: "carrots",
    productAmount: 5,
    pricePerItem: 0.3,
  },

  {
    productName: "milk",
    productAmount: 1,
    pricePerItem: 0.9,
  },

  {
    productName: "bread",
    productAmount: 2,
    pricePerItem: 1.2,
  },

  {
    productName: "chocolate",
    productAmount: 1,
    pricePerItem: 3.5,
  },
];

// print the receipt out on the screen:

console.log(`LIST OF PURCHASES:`);
receipt.forEach((product) =>
  console.log(`${product.productName} x ${product.productAmount}
price per item: ${product.pricePerItem} EUR`)
);

// counting the sum of the purchase:

function sumPurchase(receipt) {
  let total = 0;
  receipt.forEach((item) => {
    total += item.productAmount * item.pricePerItem;
  });
  return total;
}

console.log(`TOTAL PRICE: ${sumPurchase(receipt)} EUR`);

// extracting the most expensive item on the receipt:

const sortedByPrice = receipt.sort((a, b) => a.pricePerItem - b.pricePerItem);

const mostExpensiveItem = sortedByPrice.at(receipt.length - 1);

console.log(
  `the most expensive item is ${mostExpensiveItem.productName} - ${mostExpensiveItem.pricePerItem} EUR per piece`
);

// counting an average item price on the receipt:

const avgPerItem = receipt.length;

function averageItemPrice(receipt) {
  let totalItems = receipt.length;
  let totalPrice = sumPurchase(receipt);
  return totalPrice / totalItems;
}

console.log(`AVARAGE ITEM PRICE PER RECEIPT: ${averageItemPrice(receipt)} EUR`);
