/*
  Homework 2 — Tip calculator

  Your restaurant bill is 18 OMR. You want to leave a 10% tip.

  Print:
  "Tip: 1.8 OMR"
  "Total: 19.8 OMR"

  ★ Bonus: you split the total between 2 friends. How much does each pay?
*/


const bill = 18;
const tipPercent = 10;

const tip = bill * tipPercent / 100;
const total = bill + tip;
const eachPays = total / 2;

console.log("Tip: " + tip + " OMR");
console.log("Total: " + total + " OMR");
console.log("Each pays: " + eachPays + " OMR");

// your code here
