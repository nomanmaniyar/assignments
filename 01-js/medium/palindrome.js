/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  console.log(str.toLowerCase().split("").reverse().join(""));
  var str1=str.toLowerCase().split("").reverse().join("");
  
  if(str.toLowerCase()===str1){
  return true;
  }
  return false;
}

module.exports = isPalindrome;
