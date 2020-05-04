function isPalindrome(text) {
  const textLen = text.length;

  for (var i = 0; i < textLen / 2; i++) {
    if (text[i] !== text[textLen - 1 - i]) {
      return false;
    }
  }
  return true;
}

const notAPalindrome = "Hello";
const isAPalindrome = "madam";

console.log(
  `Using reverse '${notAPalindrome}' is not a Palindrome: ${isPalindrome(
    notAPalindrome
  )} but '${isAPalindrome}' is: ${isPalindrome(isAPalindrome)}`
);
