# Javascript Loose Typing and the + Operator

This example demonstrates how Javascript's loose typing can lead to unexpected behavior when using the + operator. The + operator performs addition when both operands are numbers, but it performs string concatenation when either operand is a string. Booleans, null, and undefined also result in unusual behavior. 

## Bug
The bug is in the loose type handling of the + operator, which leads to unexpected outputs depending on input types.

## Solution
Use strict type checking or explicit type conversion to ensure that the + operator behaves as expected.   Type checking ensures you're adding numbers only, and avoids concatenation errors.