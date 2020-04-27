function mostRecurringUsingArrays(text) {
  const charMap = {};

  for (t of text) {
    if (charMap.hasOwnProperty(t)) {
      charMap[t]++;
    } else {
      charMap[t] = 1;
    }
  }

  const keys = Object.keys(charMap);
  const values = Object.values(charMap);
  const maxCharValue = Math.max(...values);

  return keys[values.indexOf(maxCharValue)];
}

console.log(`Most recurring using Arrays ${mostRecurringUsingArrays("Hello")}`);
