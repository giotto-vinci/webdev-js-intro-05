"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables

let shiftValue;
let popValue;

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    console.log(todos);
}

function updateAnswerTwo() {
    console.log(todos[2]);
}

function removeLastValue() {
    todos.pop();
    let popValue = array.pop;
    console.log(todos);
    todos.reverse();
    console.log(todos);
}

function removeFirstValue() {
    todos.shift();
    let shiftValue = array.shift;
}

function addShiftAndPopValues() {
    todos.push("shiftValue", "popValue");
}

function updateAnswerFour() {
    console.log(todos);
}

function reverseTodoList() {
    todos.reverse();
}

function updateAnswerFive() {
    console.log(todos);
}

function updateAnswerSix() {
    console.log(todos);
}

function render() {
    updateAnswerOne();
    updateAnswerTwo();
    removeLastValue();
    removeFirstValue();
    addShiftAndPopValues();
    updateAnswerFour();
    reverseTodoList();
    updateAnswerFive();
    updateAnswerSix();
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});
