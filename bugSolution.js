function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both operands must be numbers');
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); // throws Error
console.log(foo(1, true)); // throws Error
console.log(foo(1, null)); // throws Error
console.log(foo(1, undefined)); // throws Error
console.log(foo(1, [1, 2])); // throws Error