#!/usr/bin/env node

const readline = require('readline');

const randomNumber = Math.floor(Math.random() * 100) + 1;
const newNumber = randomNumber;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion() {
  rl.question('Загадано число в диапазоне от 0 до 100', (answer) => {
    if (answer > newNumber) {
      console.log('Меньше');
      askQuestion();
    } else if (answer < newNumber) {
      console.log('Больше');
      askQuestion();
    } else {
      console.log(`Отгадано число ${newNumber}`);
      rl.close();
    }
  });
}

askQuestion();