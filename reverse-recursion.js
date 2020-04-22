function reverse(text) {
  if (text === "") {
    return "";
  } else {
    return reverse(text.substr(1)) + text[0];
  }
}

console.log(reverse("Hello"));
