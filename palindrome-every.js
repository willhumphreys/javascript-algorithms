function isPalindrome(text) {
  const letters = text.toLowerCase().split("");

  return letters.every((letter, index) => {
    return letter === text[text.length - 1 - index];
  });
}

const notAPalindrome = "Hello";
const isAPalindrome = "madam";

console.log(
  `Using reverse '${notAPalindrome}' is not a Palindrome: ${isPalindrome(
    notAPalindrome
  )} but '${isAPalindrome}' is: ${isPalindrome(isAPalindrome)}`
);
