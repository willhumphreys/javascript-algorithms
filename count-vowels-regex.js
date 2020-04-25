function countVowels(text) {
  const matches = text.match(/[aeiou]/gi);

  if (matches) {
    return matches.length;
  }

  return 0;
}

console.log(countVowels("Hello"));
