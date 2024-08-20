function stringIncludes (substring, mainString) {
  return mainString.includes (substring);
}

console.log (stringIncludes ('he', 'Hello'));
console.log (stringIncludes ('he', 'hello world'));
