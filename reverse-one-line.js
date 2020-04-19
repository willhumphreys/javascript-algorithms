function reverseString(text) {
  return text.split("").reverse().join("");
}

function reverseStringSpread(text) {
  return [...text].reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseStringSpread("good bye"));
