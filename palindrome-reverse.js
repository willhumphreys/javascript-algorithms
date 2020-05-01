function isPalindrome(text) {
  const reversedText = text.toLowerCase().split("").reverse().join("");

  return text === reversedText;
}

const notAPalindrome = "Hello";
const isAPalindrome = "madam";

console.log(
  `Using reverse '${notAPalindrome}' is not a Palindrome: ${isPalindrome(
    notAPalindrome
  )} but '${isAPalindrome}' is: ${isPalindrome(isAPalindrome)}`
);
