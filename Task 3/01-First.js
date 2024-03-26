// Write a Array prototype to find the index of the element.

Array.prototype.findIndex = function (element) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === element) {
      return i
    }
  }
  return -1
}

// Example usage
var arr = [1, 2, 3, 4, 5]
var index = arr.findIndex(3)
console.log("Index of element 3:", index) // Output: Index of element 3: 2
