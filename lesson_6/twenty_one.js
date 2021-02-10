/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/
let readline = require("readline-sync");

const DECK = [
  "AS",
  "2S",
  "3S",
  "4S",
  "5S",
  "6S",
  "7S",
  "8S",
  "9S",
  "TS",
  "JS",
  "QS",
  "KS",
  "AD",
  "2D",
  "3D",
  "4D",
  "5D",
  "6D",
  "7D",
  "8D",
  "9D",
  "TD",
  "JD",
  "QD",
  "KD",
  "AC",
  "2C",
  "3C",
  "4C",
  "5C",
  "6C",
  "7C",
  "8C",
  "9C",
  "TC",
  "JC",
  "QC",
  "KC",
  "AH",
  "2H",
  "3H",
  "4H",
  "5H",
  "6H",
  "7H",
  "8H",
  "9H",
  "TH",
  "JH",
  "QH",
  "KH",
];

let currentDeck = [];
let player = [];
let dealer = [];

// deep clone and then call shuffle function (reset deck)
function resetDeck() {
  currentDeck = shuffle([...DECK]);
}

function valueOfCard(str) {
  switch (str[0]) {
    case "A":
      // add conditional logic later
      return 11;
    case "T":
    case "J":
    case "Q":
    case "K":
      return 10;
    default:
      return Number(str[0]);
  }
}

function score(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const card = arr[i];
    sum += valueOfCard(card);
  }

  return sum;
}

function busted() {
  // return score(player) > 21;
  if (score(player) > 21) {
    return true;
  } else {
    return false;
  }
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
}

function checkForWinner() {
  // determine winner
  if (busted()) {
    console.log(`You busted, that's a loss.`);
    return;
  }

  if (score(dealer) > score(player)) {
    console.log(`cucks win`);
  } else if (score(dealer) === score(player)) {
    console.log(`tie`);
  } else {
    console.log(`The people have won, victoriously`);
  }
}

function dealCards() {
  dealer.push(currentDeck.pop());
  dealer.push(currentDeck.pop());
  player.push(currentDeck.pop());
  player.push(currentDeck.pop());

  // after two cards have been dealt
  while (true) {
    console.log("hit or stay?");
    console.log(`Dealer Has: ${dealer}`);
    console.log(`You have: ${player}`);
    let answer = readline.question();

    if (answer === "stay" || busted()) {
      break;
    } else {
      player.push(currentDeck.pop());
      if (busted()) {
        console.log(`You busted, that's a loss.`);
        break;
      }
    }
  }

  checkForWinner();
}

resetDeck();
dealCards();
