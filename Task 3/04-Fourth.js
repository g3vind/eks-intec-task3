// Write Array Prototype to remove last element.

Array.prototype.removeLastElement = function () {
  // Check if the array is not empty
  if (this.length > 0) {
    // Remove the last element using pop()
    this.pop()
  }
}

// Example usage
var arr = [1, 2, 3, 4, 5]
arr.removeLastElement()
console.log("Array after removing last element:", arr) // Output: Array after removing last element: [1, 2, 3, 4]
