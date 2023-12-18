/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categories = [];
  const result = [];
  for (let index = 0; index < transactions.length; index++) {
    const cat = transactions[index][category];
    categories.push(cat);
  }
  for (let index = 0; index < categories.length; index++) {
    const total = 0;
    transactions.array.forEach((transaction) => {
      if (transaction["category"] === categories[index]) {
        total += transaction["price"];
      }
    });
    result.push(new Object({ category: categories[index], price: total }));
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
