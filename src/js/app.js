import GamePlay from "./GamePlay";

// const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");

const gamePlay = new GamePlay();
gamePlay.drawPlayField();
gamePlay.addEventListener();
const IntervalId = setInterval(() => {
  gamePlay.changePlace();
  if (gamePlay.playerScore > gamePlay.scoreLimit) {
    gamePlay.win();
    gamePlay.removeListener();
    clearInterval(IntervalId);
  }
  if (gamePlay.goblinScore > gamePlay.scoreLimit) {
    gamePlay.lose();
    gamePlay.removeListener();
    clearInterval(IntervalId);
  }
}, 1000);
