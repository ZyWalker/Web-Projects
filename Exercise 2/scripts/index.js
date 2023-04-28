"use strict";

function addButton() {
  const firstNumberElement = document.getElementById("number1Field");
  const secondNumberElement = document.getElementById("number2Field");
  const answerElement = document.getElementById("answerField");
  const firstNumber = Number(firstNumberElement.value);
  const secondNumber = Number(secondNumberElement.value);
  let additionAnswer = firstNumber + secondNumber;
  answerElement.value = additionAnswer;
}

function subtractButton() {
  const firstNumberElement = document.getElementById("number1Field");
  const secondNumberElement = document.getElementById("number2Field");
  const answerElement = document.getElementById("answerField");
  const firstNumber = Number(firstNumberElement.value);
  const secondNumber = Number(secondNumberElement.value);
  let subtractionAnswer = firstNumber - secondNumber;
  answerElement.value = subtractionAnswer;
}

function multiplyButton() {
  const firstNumberElement = document.getElementById("number1Field");
  const secondNumberElement = document.getElementById("number2Field");
  const answerElement = document.getElementById("answerField");
  const firstNumber = Number(firstNumberElement.value);
  const secondNumber = Number(secondNumberElement.value);
  let mutiplyAnswer = firstNumber * secondNumber;
  answerElement.value = mutiplyAnswer;
}

function divideButton() {
  const firstNumberElement = document.getElementById("number1Field");
  const secondNumberElement = document.getElementById("number2Field");
  const answerElement = document.getElementById("answerField");
  const firstNumber = Number(firstNumberElement.value);
  const secondNumber = Number(secondNumberElement.value);
  let divideAnswer = firstNumber / secondNumber;
  answerElement.value = divideAnswer;
}
