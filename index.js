"use strict";
// npm init -y
// tsc --Init
// tsc
// write a program that print the Table of 2. 
var start = 1;
while (start <= 10) {
    let result = 2 * start;
    console.log("2* " + start + " = " + result);
    start = start + 1;
}
// write a program that print the Table of 5.
var start = 1;
while (start <= 10) {
    let result = 5 * start;
    console.log("5* " + start + "  = " + result);
    start = start + 1;
}
var start = 1;
while (start <= 10) {
    let result = 7 * start;
    console.log("7* " + start + " = " + result);
    start = start + 1;
}
// let counter =0;
// while (counter < 5) {
//     console.log(counter);
//     counter ++;
// }
// console.log("before loop");
// var index:number = 1;
// {
//     console.log("print in loop"); 
//     var index:number = 1;
//     while(index < 10){
//         console.log("print in loop");
//         console.log("index", index );
//         index = index +1;
//     }
// }
// console.log("after loop");
// console.log("before loop");
// var index:number = 1;
// while(index <= 3 ){
//     console.log("1");
//     console.log("2");
//     index = index +1;
// }
// console.log("after loop");
// function printConsole() {
//     console.log("1");
//     }
//     printConsole();
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// printConsole();
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
var studentNames = ["Naveed", "Irfan", "zain", "Umar"];
// studentNames.splice(4,0,"Zeeshan");
// studentNames.splice(0,1);
studentNames.splice(3, 1);
// studentNames.push("Zeeshan");
// studentNames.pop();
// studentNames.shift();
// studentNames.unshift("abdullah");
// studentNames.splice(2,2,"ahsan");
// studentNames.push('Faizan');
console.log(studentNames);
// function pushToArray(item:string){
//     studentNames[studentNames.length] = item;
// }
// pushToArray('Zeeshan');
// studentNames[studentNames.length]= "Zeeshan";
// studentNames[studentNames.length]= "Zeeshan";
// studentNames[studentNames.length]= "Zeeshan";
// studentNames[studentNames.length]= "Zeeshan";
// function printSomething(params:type) {
// }
//  }
//  printsomething()
// var rollNo0:number = 1;
// var rollNo1:number =2;
// var rollNo3:number =3;
// var rollNo4:number = 4;
// rollNo4 = 104; 
// var sum:number = rollNo0 + rollNo1;
// studentRollNo = new Array(7);
// var studentRollNo:number[] = [10,20,30,40,50,60.70]
// var newVar:number = 204; 
// studentRollNo[4] = 104; 
// var sum2:number = studentRollNo [0] + studentRollNo[1]
// //   console.log(studentRollNo[0]);
//   performance.now()
// var studentNames:string []= ["Naveed", "Irfan", "zain", "Umar"]
// performance.now()
// console.log(studentNames[2],studentNames[4]);
// studentNames[2] ="alex"; 
// console.log(studentNames[3]);
// console.log(studentNames);
// var studentNames:string []= ["Naveed", "Irfan", "zain", "Umar"];
// console.log(studentNames.length);
// console.log(studentNames);
// Array{ 
// function pushNewItemInArray(studentName:string) {
//     studentNames[studentNames.length] = studentName;
//     }  }
//     Array.pushNewItemInArray()
//     console.log(studentNames);
//     Variable{ 
//     function changeVariableValue(){
//     }
//     function deleteVariableValue() {
//     }
//     function  changeVariableType(){
//     }
// }
// console.log();
// console.error()
// parent()
// parseFloat()
// log();
// car{
// }
// pushNewItemInArray("Zeeshan");
// pushNewItemInArray("Sawar");
// pushNewItemInArray("Muzzammil");
// In TypeScript, arrays are a fundamental data structure that allows 
// you to store and manipulate collections of elements. TypeScript provides 
// strong typing for arrays, which helps to catch errors at compile-time an
//  ensures that arrays are used consistently. Below, we will explore 
//  different aspects of TypeScript arrays, including their types and
//  various features.
// 1. Basic Array Types
// In TypeScript, arrays can be typed in two primary ways: using square
//  brackets [] or the Array generic type.
// Using Square Brackets
// Syntax:
// let arrayName:type [];
// Example:
// let numbers:number [] = [1,2,3,4,5,];
// let names:string[] = ["Alice", "Bob", "charlie"];
// console.log(numbers);
// console.log(names);
// Using the Array Generic Type
// Syntax:
// let arrayName:array <type>;
// //Example:
// let numbers:Array <number>= [1,2,3,4,5]
// let names:Array <string>=["Alice","Bob", "charlie"];
// console.log(numbers[0]);
// console.log(names[1]);
// Both notations achieve the same result and are interchangeable.
// 2. Multi-Dimensional Arrays
// Multi-dimensional arrays are arrays that contain arrays as their elements.
// They are used to store data in a matrix-like structure.
// Example:
// let matrix:number[][]=[
//     [1,2,3],
//     [4,5,6,],
//     [7,8,9,]
// ];
// console.log(matrix[1][2]); // output:6 
// In this example, matrix is a 2-dimensional array (an array of arrays), 
// where each sub-array represents a row of the matrix.
// 3. Array of Tuples
// Arrays can also contain tuples, which are fixed-size collections of
//  elements where each element can have a different type.
// Example:
// let userinfo:[string, number][]=[
//     ["ALice",25],
//     ["Bob",30],
//     ["charlie",35]
// ];
// console.log(userinfo[3]); // output: ["Alice", 25]
// Here, userInfo is an array of tuples, 
// where each tuple contains a string and a number.
// 4. Readonly Arrays
// Readonly arrays are arrays that cannot be modified after creation. This is useful for protecting data that should not be altered.
// Syntax:
// let arrayName:readonly type[]
// Example:
// let readonlyNumbers:readonly number[]=[1,2,3,4,5,6];
// In this example, readonlyNumbers is a readonly array of numbers, and any attempt 
// to modify it will result in a compilation error.
// 5. Array Methods
// TypeScript arrays inherit a variety of methods from JavaScript, 
// allowing for powerful manipulation of array elements.
// Common Array Methods
// push: Adds one or more elements to the end of the array.
// pop: Removes the last element from the array.
// shift: Removes the first element from the array.
// unshift: Adds one or more elements to the beginning of the array.
// splice: Adds/removes elements from a specific position in the array.
// map: Creates a new array with the results of calling a function on every element.
// filter: Creates a new array with elements that pass the test in a provided function.
// reduce: Applies a function against an accumulator and each element to reduce it to a single value.
// Example:
// let fruits:string[]=["Apple","Banana","cherry","Mango","orange"];
// // fruits.push("Date"); // add "Date" to the end\log
// console.log(fruits);
// fruits.pop(); // removes the last element from the array.
// console.log(fruits);
// let upperCaseFruits:string[]=fruits.map(fruit =>fruit.toUpperCase());
// console.log(upperCaseFruits);  // Output: ["Apple","Banana","cherry","Mango","orange"]
// let fruits:string[]=["Apple","Banana","cherry","Mango","orange"];
// fruits.shift(); // add "Date" to the end\log
// console.log(fruits);
// fruits.unshift("Grapes"); // removes the last element from the array.
// fruits.splice(2,4);// removes the last elements from the array
// fruits.splice(2,4, "Grapes","blueberry") // splice: Adds elements from a specific position in the array.
// console.log(fruits);
// 6. Generic Arrays
// Generic arrays allow you to create arrays of any type using the
//  Array<T> syntax, where T is a placeholder for the actual type you
//   want to store.
// Example:
// function getArray<T>(item:T[]): T[]{
//     return new Array().concat(item);
// }
// let numberArray = getArray<number>([1,2,3]);
// let stringArray = getArray<string>(["A","B","C"]);
// console.log(numberArray); // output [1,2,3,]
// console.log(stringArray); // output ["A","B","C"]
// 7. Array Types with Interfaces
// You can define arrays using interfaces to create more structured and complex types.
// Example:
// interface person {
//     name:string;
//     age:number;
// }
// let people: person[]=[
//     {name:"Alice",age:20},
//     {name:"Bob", age:30}
// ];
// console.log(people[0].name);//output Alice's name 
// In this example, people is an array of objects where each object
// conforms to the Person interface.
// 8. Typed Arrays for Numeric Data
// Typed arrays are designed for handling large sets of numeric data efficiently. They provide a way to work with binary data.
// Example:/utput : 20 
// Typed arrays such as Int8Array, Float32Array, and others allow
//  for efficient storage and manipulation of numeric data in memory.
// 9. Union Types in Arrays
// TypeScript supports union types in arrays, allowing you to store 
// elements of different types in the same array.
// Example:
// let mixArrays:(number | string)[]=[1,"two",3, "four"];
// console.log(mixArrays[0]); // output: [1,"two",3, "four"]
// console.log(mixArrays[3]);
// In this example, mixedArray can contain both number and string elements.
// 10. Array Destructuring
// Array destructuring allows you to unpack values from arrays
//  into distinct variables.
// Example:
// let number:number[]=[1,2,3]
// let [first, second, third] = numbers;
// console.log(first); // output 1
// console.log(second); // output 2
// console.log(third);  // output 3
// Summary
// Basic Array Types: Use type[] or Array<type> to declare arrays of a
//  specific type.
// Multi-Dimensional Arrays: Store arrays within arrays to create 
// matrix-like structures.
// Array of Tuples: Store fixed-size collections with different types
//  in each element.
// Readonly Arrays: Create immutable arrays to protect data from 
// modification.
// Array Methods: Utilize powerful built-in methods to manipulate and
//  transform arrays.
// Generic Arrays: Use generics to create arrays of any type,
//  promoting code reuse.
// Array Types with Interfaces: Define complex array structures 
// using interfaces.
// Typed Arrays: Work efficiently with large sets of numeric data
//  using typed arrays.
// Union Types in Arrays: Store different types of elements in the same array.
// Array Destructuring: Unpack array elements into individual variables.
// Understanding and utilizing these different aspects of arrays in
//  TypeScript will help you manage collections of data more effectively
//  and write more robust and maintainable code. If you have any specific 
//  questions or need further examples, feel free to ask!
