export default class GamePlay {
  constructor() {
    this.playerScore = 0;
    this.goblinScore = 0;
    this.scoreLimit = 5;
    this.handClick =this.onCellClick.bind(this);
    }

  drawPlayField() {
    let boardEl = document.createElement("div");
    boardEl.classList.add("board");
    let contEl = document.querySelector(".board-container");
    contEl.append(boardEl);
    for (let index = 0; index < 16; index++) {
      let cellEl = document.createElement("div");
      cellEl.classList.add("A");
      // cellEl.addEventListener('click', event => this.onCellClick(event));
      boardEl.append(cellEl);
    }
  }
  
  addEventListener = () => {
    window.addEventListener('click', this.handClick);
  }
  
  removeListener = () => {
    window.removeEventListener('click', this.handClick);
  }

  lose () {
    let loseMessageEl = document.createElement('h1');
      loseMessageEl.classList.add('lose');
      loseMessageEl.textContent = 'Вы проиграли!';
      let contEl = document.querySelector(".board-container");
      contEl.before(loseMessageEl);
  }

  win () {
    let winMessageEl = document.createElement('h1');
    winMessageEl.classList.add('win');
    winMessageEl.textContent = 'Враг убит, Вы выиграли!';
    let contEl = document.querySelector(".board-container");
    contEl.before(winMessageEl);
  }

  onCellClick(event) {
    let clickEl = event.target;
    if (clickEl.classList.contains("goblin")) {
      this.playerScore += 1;
      console.log('Очки игрока', this.playerScore);
    } else {
      this.goblinScore += 1;
      console.log('Очки гоблина', this.goblinScore);
    }
  }

  createImg = (number) => {
    let imgEl = document.createElement("img");
    imgEl.classList.add("goblin");
    let cellCollection = document.querySelectorAll(".A");
    cellCollection[number].append(imgEl);
  };

  removeImg = () => {
    let goblinEl = document.querySelector(".goblin");
    if (goblinEl) {
      goblinEl.remove();
    }
  };

  changePlace() {
    if (this.playerScore < this.scoreLimit && this.goblinScore < this.scoreLimit) {
      this.removeImg();
      let number = Math.floor(Math.random() * 16);
      this.createImg(number);
    }
  }
}
