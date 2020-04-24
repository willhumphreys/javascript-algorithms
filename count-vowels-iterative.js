const vowels = ["a", "e", "i", "o", "u"];

function countVowels(text) {
  let counter = 0;

  for (let letter of text) {
    if (vowels.includes(letter.toLowerCase())) {
      counter++;
    }
  }

  return counter;
}

console.log(countVowels("Hello"));
