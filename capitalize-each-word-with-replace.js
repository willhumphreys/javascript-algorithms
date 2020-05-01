function capitalize(text) {
  return text
    .split(" ")
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");
}

console.log(`Capitize using replace: ${capitalize("hey. how are you doing")}`);
