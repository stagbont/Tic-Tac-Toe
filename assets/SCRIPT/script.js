function Gameboard() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
  }

  
Gameboard.prototype.render = function() {
  const gameboard = document.getElementById("gameboard");
  gameboard.innerHTML = "";
  for (let i = 0; i < this.board.length; i++) {
    for (let j = 0; j < this.board[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("box");
      if (this.board[i][j]) {
        cell.innerHTML = this.board[i][j];
      }
      gameboard.appendChild(cell);
    }
  }
};

function createPlayer(name, symbol) {
    const player = {};
    player.name = name;
    player.symbol = symbol;

    player.addMark = (index) => {
        gameboard[index] = player.symbol;
    };
    return player;
}