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
  let result = [];
  if (transactions.length == 0) {
    return [];
  }
  const categories = Array.from(
    new Set(transactions.map((obj) => obj.category)),
  );
  for (let index = 0; index < categories.length; index++) {
    let total = 0;
    transactions.forEach((transaction) => {
      if (transaction["category"] === categories[index]) {
        total += parseInt(transaction["price"]);
      }
    });
    result.push({ category: categories[index], totalSpent: total });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
