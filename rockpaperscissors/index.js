"use strict";
//console.log("Hej Verden!");

const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissor_btn = document.querySelector(".scissors");
let userChoice;
let computerChoice;
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
document.addEventListener("DOMContentLoaded", init);

function init() {
  rock_btn.addEventListener("click", rockClick);
  paper_btn.addEventListener("click", paperClick);
  scissor_btn.addEventListener("click", scissorsClick);
}

function rockClick() {
  player1.classList.add("rock");
  console.log("ROCK!");
  userChoice = "rock";
  player1.classList.add("rock");
  player1.classList.remove("paper", "scissors");
  computerChooses();
}

function paperClick() {
  handShakesStart();
  console.log("PAPER!");
  userChoice = "paper";
  player1.classList.add("paper");
  player1.classList.remove("rock", "scissors");
  computerChooses();
}

function scissorsClick() {
  console.log("SCISSORS!");
  userChoice = "scissors";
  player1.classList.add("scissors");
  player1.classList.remove("paper", "rock");
  computerChooses();
}

function computerChooses() {
  computerChoice = "scissors";
  handShakesStart();
}

function handShakesStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  setTimeout(showHands, 1800);
}

function showHands() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  player1.classList.add(userChoice);
  player2.classList.add(computerChoice);
  findVinner();
}

function findVinner() {
  document.getElementById("win").classList.add("hidden");
  document.getElementById("lose").classList.add("hidden");
  document.getElementById("draw").classList.add("hidden");

  if (userChoice === computerChoice) {
    document.getElementById("draw").classList.remove("hidden");
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    document.getElementById("win").classList.remove("hidden");
  } else {
    document.getElementById("lose").classList.remove("hidden");
  }
}
