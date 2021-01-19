const readline = require("readline-sync");
const VALID_CHOICES = ["r", "p", "s"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (
    (choice === "r" && computerChoice === "s") ||
    (choice === "l" && computerChoice === "sp") ||
    (choice === "l" && computerChoice === "p") ||
    (choice === "sp" && computerChoice === "r") ||
    (choice === "sp" && computerChoice === "s") ||
    (choice === "p" && computerChoice === "r") ||
    (choice === "s" && computerChoice === "p")
  ) {
    prompt("You win!");
  } else if (
    (choice === "r" && computerChoice === "p") ||
    (choice === "p" && computerChoice === "s") ||
    (choice === "s" && computerChoice === "r")
  ) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0 !== 'y']) {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
