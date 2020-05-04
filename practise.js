// 1 reverse one line

function reverse(text) {}

console.log(`1: Reverse one line:  ${reverse("Hello")}`);

// 2 reverse one line spread

function reverseSpread(text) {}

console.log(`2: Reverse spread: ${reverseSpread("Hello")}`);

// 3 reverse for loop

function reverseLoop(text) {}

console.log(`3: Reverse loop: ${reverseLoop("Hello")}`);

// 4 reverse short for loop

function reverseLoopShort(text) {}

console.log(`4: Reverse loop short: ${reverseLoopShort("Hello")}`);

// 5 reverse recursion

function reverseRecursion(text) {}

console.log(`5: Reverse recursion: ${reverseRecursion("Hello")}`);

// 6 reverse reduce

function reverseReduce(text) {}

console.log(`6: Reverse reduce: ${reverseReduce("Hello")}`);

// 7 count vowels iterative

const vowels = ["a", "e", "i", "o", "u"];

function countVowels(text) {
  const matches = text.match(/[aeiou]/gi);

  if (matches) {
    return matches.length;
  }
  return 0;
}

console.log(`7: Count vowels: ${countVowels("Hello")}`);

// 8 count vowels regex

function countVowelsRegex(text) {}

console.log(`8: Count vowels regex: ${countVowelsRegex("Hello")}`);

// 9 find the most recurring character character map

function mostRecurringForIn(text) {}

console.log(`9: Most recurring letter: ${mostRecurringForIn("Hello")}`);

// 10 find the most recurring letter using arrays

function mostRecurringUsingArrays(text) {}

console.log(
  `10: Most recurring using Arrays ${mostRecurringUsingArrays("Hello")}`
);

// 11 Capitalize each letter using for

function capitalizeFor(text) {}

console.log(`11 Capitalize words for:  ${capitalizeFor("hello. how are you")}`);

// 12 Capitalize each letter using map

function capitalizeMap(text) {}

console.log(`12 Capitalize words for:  ${capitalizeMap("hello. how are you")}`);

// 13 Capitalize each letter using replace

function capitalizeUsingReplace(text) {}

console.log(
  `13 Capitalize words with replace:  ${capitalizeUsingReplace(
    "hello. how are you"
  )}`
);

// 14 Check for palindrome using reverse

function checkForPalindromeUsingReverse(text) {}

const notAPalindrome = "Hello";
const isAPalindrome = "madam";

console.log(
  `Using reverse '${notAPalindrome}' is not a Palindrome: ${checkForPalindromeUsingReverse(
    notAPalindrome
  )} but '${isAPalindrome}' is: ${checkForPalindromeUsingReverse(
    isAPalindrome
  )}`
);

// 14 Check for palindrome using every

function checkForPalindromeUsingEvery(text) {}

console.log(
  `Using every '${notAPalindrome}' is not a Palindrome: ${checkForPalindromeUsingEvery(
    notAPalindrome
  )} but '${isAPalindrome}' is: ${checkForPalindromeUsingEvery(isAPalindrome)}`
);

// 15 Check for palindrome using every

function checkForPalindromeUsingEveryOptimized(text) {}

console.log(
  `Using optimized for '${notAPalindrome}' is not a Palindrome: ${checkForPalindromeUsingEvery(
    notAPalindrome
  )} but '${isAPalindrome}' is: ${checkForPalindromeUsingEvery(isAPalindrome)}`
);
