function reverse(text) {
  let result = "";

  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }

  return result;
}

function reverseShort(text) {
  let result = "";

  for (let char of text) {
    result = char + result;
  }

  return result;
}

console.log(reverse("Hello"));
console.log(reverseShort("Hello"));
