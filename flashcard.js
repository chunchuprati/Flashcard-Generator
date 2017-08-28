var inquirer = require('inquirer');
var colors = require('colors');
var  fs = require("fs");
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

// var firstPresident = BasicCard("Who is the first President of United States?", "George Washington");
// "Who was the first President of United States"
// console.log(firstPresident.front.blue);

// "George Washington"
// console.log(firstPresident.back.yellow)

// var firstPresidentCloze =  ClozeCard("George Washington was the first President of United States", "first President");
// console.log(firstPresidentCloze.cloze.rainbow);
// console.log(firstPresidentCloze.partial.magenta);
// console.log(firstPresidentCloze.fullText.cyan);

// var brokenCloze = new ClozeCard("This doesn't work", "oops");