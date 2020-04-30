function capitalizeMap(text) {
  const words = text.split(" ");

  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(`Each word capitalized: ${capitalizeMap("there are some words")}`);
