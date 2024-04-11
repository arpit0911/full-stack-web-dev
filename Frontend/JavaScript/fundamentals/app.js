{
// Q1 practice question---
// let number = prompt("enter a number");
// if (number % 10 === 0) {
//   alert("good number");
// } else {
//   alert("bad number");
// }/
//1111

// Q2

// let userName = prompt("Enter Username ");
// let age = prompt("Enter age");
// alert(userName + " is " + age + " years old");
// 2222

// Q3
// let quarter = prompt("Enter the quarter");
// // let quarter = 2;
// switch (quarter) {
//   case "1": {
//     alert("January, February, March");
//     break;
//   }
//   case "2": {
//     alert("April, May, June");
//     break;
//   }
//   case "3": {
//     alert("July, August, September");
//     break;
//   }
//   case "4": {
//     alert("October, November, December");
//     break;
//   }
//   default:
//     alert("only 4 quarter in a year");
//     break;
// }

// JS part 3

// Q1
// let array  = [7,9,0,-2]
// let n=3
// console.log(array.slice(0, n))
// -------------------------------------------------------------
// TODO app with just js

// let todoList = [];
// let cmd = prompt("Enter command");

// while (true) {
//   if (cmd == "quit") {
//     console.log("quitting app!!");
//     break;
//   }

//   if (cmd == "list") {
//     for (task of todoList) {
//       console.log(task);
//     }
//   } else if (cmd == "add") {
//     let todo = prompt("Enter task");
//     todoList.push(todo);
//     console.log("added");
//   } else if (cmd == "delete") {
//     let index = prompt("Enter index");
//     todoList.splice(index, 1);
//     console.log("deleted", index);
//   } else {
//     console.log("wrong command");
//   }

//   cmd = prompt("Enter command");
// }
// ..............................................................

//! js part 4
//! q1

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// let res = arr.filter((el) => el != num);
// console.log(res);

//! q2
// let num = 287152;
// console.log(String(num).split("").length);

//! q3
// let num = 287152;
// let arr = String(num).split("");
// let sum = 0;
// for (el of arr) {
//   sum += Number(el);
// }
// console.log(sum);

//! q4
// let n = 5;
// let fact = 1;

// while (n > 0) {
//   fact *= n;
//   n -= 1;
// }
// console.log(fact);

//! q5

// let arr = [1, 320, 2, 6, 34, 8, 320, 2];
// let largest = 0;
// for (const el of arr) {
//   if (el > largest) largest = el;
// }
// console.log(largest);

// ! js part5
// q1

// console.log(Math.floor(Math.random() * 6) + 1);

// let sum = 10;

// function findSum(dum) {
//   let sum = 20;
//   console.log("sum in", sum, dum);
// }

// console.log("sum out", sum);

// findSum(sum);

// setTimeout(() => {}, timeout);
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! function calling !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// LargerThenNum([1, 4, 62, 23, 457, 3, 4, 7], 4);
// uniqueString("abcdabcdefgggh");
// biggestString(["Australia", "germany", "united state of america"]);
// countVowels("arpit singh");
// generateRandom(0, 5);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//! random number with range start and end

// function generateRandom(start, end) {
//   //* 0 -> 10 include start !end
//   //   console.log(Math.floor(Math.random() * (end - start) + start));
//   //* 0 -> 10 include end !start
//   //   console.log(Math.floor(Math.random() * (end - start)) + 1);
// }

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// !Count vowels

// function countVowels(str) {
//   let vowels = str.match(/[aeiou]/gi);
//   if (vowels != null) {
//     console.log(vowels.length);
//   } else {
//     console.log("no vowels");
//   }
// }

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// !Biggest String --------------------

// function biggestString(arr) {
//   let itemSpec = {
//     element: "",
//     len: 0,
//   };
//   for (const item of arr) {
//     if (item.length > itemSpec.len) {
//       itemSpec.element = item;
//       itemSpec.len = item.length;
//     }
//   }
//   console.log(itemSpec);
// }
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ! Larger then number ---------------------

// function LargerThenNum(arr, n) {
//   console.log(arr.filter((el) => el > n));
// }
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// ! Unique string ----------------------------

// function uniqueString(str) {
//   let result = "";
//   for (const item of str.split("")) {
//     if (result.indexOf(item) === -1) {
//       result += item;
//     }
//   }
//   console.log("unique String=", result);
// }
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
