/* CHALLANGE 2 - Const
Answer following Qustions:
  1. Why no error is generated after the line 14?
  Because you can change the elements of a constant array, but you can NOT reassign a constant array
  2. Why after the line 19 TypeError is generated?
  Because they are triyng to reassign a constant array
Change one line of code so, that error will go away.
Don't change lines 14, 19.
*/

"use strict";

let arr = [1, 2];

arr.push(3);

console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];
// BEFORE: Uncaught TypeError:
//   Assignment to constant variable.
// AFTER: No error

console.log(arr);
// [1, 2, 3, 4]