function reverse(text) {
  return [...text].reduce((acc, char) => char + acc, "");
}

console.log(reverse("Hello"));
