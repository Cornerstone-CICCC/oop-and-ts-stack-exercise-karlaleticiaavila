// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeDuplicates(stack) {
  const tempStack = new Stack()
  const seen = new Set()

  while (!stack.isEmpty()) {
    const value = stack.pop()

    if (!seen.has(value)) {
      seen.add(value)
      tempStack.push(value)
    }
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop())
  }
}

module.exports = removeDuplicates

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack)
console.log(stack.printStack()) // [3, 1, 2, 5]
