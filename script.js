/* Module for gameboard */

const gameBoard = (() => {
    let board = ["x", "o", "x", "x", "o", "x", "x", "o", "x"]
    return {
        board
    }
})()

/* Module to change the fields in gameboard */

const displayController = (() => {

})()

/* Factory function to create Player object */

const Player = (name, symbol) => {
    const getName = () => name
    const getSymbol = () => symbol
    return {name, symbol}
}

let gameBoardContainer = document.getElementById("gameBoardContainer")
function drawBoard() {
    for (let i = 0;i<gameBoard.board.length;i++) {
        let field = document.createElement("div")
        field.classList.add("field")
        field.textContent = gameBoard.board[i]
        gameBoardContainer.appendChild(field)
    }
}

drawBoard()