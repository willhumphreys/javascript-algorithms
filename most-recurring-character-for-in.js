function mostRecurring(text) {
  const charMap = {};
  let maxCharValue = 0;
  let maxChar = "";

  for (char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (char in charMap) {
    if (charMap[char] > maxCharValue) {
      maxCharValue = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(mostRecurring("Hello"));
