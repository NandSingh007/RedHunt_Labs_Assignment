// 2.-->  Problem: You are given a string containing only characters (, ), {, }, [ and ]. Write a function that
//        determines if the input string is valid. An input string is valid if:

//  1. Open brackets are closed by the same type of brackets.
//  2. Open brackets are closed in the correct order

// Example:
// Input: '([{}])'
// Output: True
// Input: '(]'
// Output: False
// Input: '({[]})'
// Output: True

function isValidBrackets(s) {
  const stack = [];
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of s) {
    if (bracketMap[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (bracketMap[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(isValidBrackets("([{}])")); // Expected output: true
console.log(isValidBrackets("(]")); // Expected output: false
console.log(isValidBrackets("({[]})")); // Expected output: true
