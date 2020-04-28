function capitalizeFor(text) {
  const words = text.split(" ");

  const upperCaseWords = [];

  words.forEach((word) => {
    upperCaseWords.push(word[0].toUpperCase() + word.substr(1));
  });

  return upperCaseWords.join(" ");
}

console.log(`11 Capitalize words for:  ${capitalizeFor("hello. how are you")}`);
