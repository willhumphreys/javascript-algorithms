// 1 reverse one line

function reverse(text) {
  return text.split("").reverse().join("");
}

console.log(`1: Reverse one line:  ${reverse("Hello")}`);

// reverse one line spread

function reverseSpread(text) {
  return [...text].reverse().join("");
}

console.log(`2: Reverse spread: ${reverseSpread("Hello")}`);

// reverse for loop

function reverseLoop(text) {
  let result = "";

  for (x = text.length - 1; x >= 0; x--) {
    result = text[x] + result;
  }

  return result;
}

console.log(`3: Reverse loop: ${reverseLoop("Hello")}`);

// reverse short for loop

function reverseLoopShort(text) {
  let result = "";

  for (char of text) {
    result = char + result;
  }

  return result;
}

console.log(`4: Reverse loop short: ${reverseLoopShort("Hello")}`);

// reverse recursion

function reverseRecursion(text) {
  if (text === "") {
    return "";
  }

  return reverseRecursion(text.substr(1)) + text[0];
}

console.log(`5: Reverse recursion: ${reverseRecursion("Hello")}`);

// reverse reduce

function reverseReduce(text) {
  return [...text].reduce((acc, x) => x + acc, "");
}

console.log(`6: Reverse reduce: ${reverseReduce("Hello")}`);

// count vowels iterative

const vowels = ["a", "e", "i", "o", "u"];

function countVowels(text) {
  let count = 0;

  for (char of text) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
}

console.log(`7: Count vowels: ${countVowels("Hello")}`);

// count vowels regex

function countVowelsRegex(text) {
  const matches = text.match(/[aeiou]/gi);

  if (matches) {
    return matches.length;
  }

  return 0;
}

console.log(`8: Count vowels regex: ${countVowelsRegex("Hello")}`);

// find the most recurring character character map

function mostRecurringForIn(text) {
  const charMap = {};

  for (char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  let maxCount = 0;
  let maxChar = "";

  for (c in charMap) {
    if (charMap[c] > maxCount) {
      maxChar = c;
      maxCount = charMap[c];
    }
  }

  return maxChar;
}

console.log(`9: Most recurring letter: ${mostRecurringForIn("Hello")}`);

function mostRecurringUsingArrays(text) {}

console.log(
  `10: Most recurring using Arrays ${mostRecurringUsingArrays("Hello")}`
);

function capitalizeFor(text) {}

console.log(`11 Capitalize words for:  ${capitalizeFor("hello. how are you")}`);
