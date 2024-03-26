// Write a Array prototype to remove the element.

Array.prototype.removeElement = function (element) {
  // Find the index of the element
  var index = this.indexOf(element)

  // If the element is found, remove it
  if (index !== -1) {
    this.splice(index, 1)
  }
}

// Example usage
var arr = [1, 2, 3, 4, 5]
arr.removeElement(3)
console.log("Array after removing element 3:", arr) // Output: Array after removing element 3: [1, 2, 4, 5]
