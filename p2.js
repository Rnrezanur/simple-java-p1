// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

var mathMarks = parseFloat("75.25");

var biologyMarks = parseFloat("65");

var chemistryMarks = parseFloat("80");
var physicsMarks = parseFloat("35.45");

var banglaMarks = parseFloat("99.50");

var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;

var averageMarks = totalMarks / 5;

console.log(averageMarks.toFixed(2));