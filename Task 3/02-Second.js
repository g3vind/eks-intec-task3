//  Write a String prototype to replace the string with using regex.

String.prototype.customReplace = function (regex, replacement) {
  return this.replace(regex, replacement)
}

// Example usage
var str = "Hello, World!"
var newStr = str.customReplace(/o/g, "X")
console.log("New string:", newStr) // Output: New string: HellX, WXrld!
