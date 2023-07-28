function isPalindrome(word) {
  // Write your algorithm here
  let reversedText = "";
  for(let i=word.length-1; i>=0; i--){
    reversedText += word[i];
  }
  return word === reversedText
}

/* 
  create a variable to store reversed word
  loop through characters
  append the last character to variable reversedText
  if equal, return true, otherwise return false
*/

/*
  Add written explanation of your solution here
  the function checks whether the input is a palindrome or not
  Checks are done to confirm if the word would be the same id reversed
  This means that the words would read the same forward and backwards hence a
  palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
