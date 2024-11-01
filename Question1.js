// question1.   Given a list of integers, write a function to find the first non-repeating integer in the list. If all
//              integers repeat, return None.

// condition 1---->  The function should be efficient, ideally with a time complexity of O(n).
// condition 2---->  Avoid using extra space where possible.

// Example:
// Input: [4, 5, 1, 2, 0, 4]
// Output: 5
// Input: [1, 1, 2, 2, 3, 3]
// Output: None

function firstNonRepeating(arr) {
  // Step 1: Create an object to store frequencies
  const frequency = {};

  // Count the frequency of each number
  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // Step 2: Find the first integer with a frequency of 1
  for (const num of arr) {
    if (frequency[num] === 1) {
      return num;
    }
  }

  // Step 3: Return null if all integers repeat
  return null;
}

// Example usage
console.log(firstNonRepeating([4, 5, 1, 2, 0, 4])); // Output: 5
console.log(firstNonRepeating([1, 1, 4, 2, 3, 3])); // Output: null
