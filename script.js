// player factory function

const createPlayer = (name, marker, played = [], color) => {
        return {
            name,
            marker,
            played,
            color
        }
    }
let currentPlayer
// module for gameboard

const gameBoard = (() => {
    
    // generate board array

    let board = ["","","","","","","","",""]
    
    // define players

    let playerOne = createPlayer("Player One", "x", [], "#10B981")
    let playerTwo = createPlayer("Player Two", "o", [], "#F43F5E")

    // win conditions

    const winCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
     
    // display squares for each array item

    let squares = document.querySelector(".squares")

    for (let i = 0; i<board.length; i++) {
        let square = document.createElement("button")
        square.classList.add("square")
        square.setAttribute("id", "square" + (i + 1))
        squares.appendChild(square) 
    }
    
    // add event listener to each square
    currentPlayer = playerOne
    let remainingMoves = 9
    Array.from(squares.children).forEach((item, index) => {
        item.addEventListener("click", () => {
            if (item.textContent == "" && gameOver == false) {
                item.textContent = currentPlayer.marker
                board.splice(index, 1, currentPlayer.marker)
                item.style.color = currentPlayer.color
                remainingMoves--
                displayController.printCurrentPlayer()
                winCheck()
                nextPlayer()
                
            } 
        })
    })
    
    // function to go to next player

    function nextPlayer() {
        if (currentPlayer == playerOne) {
            currentPlayer = playerTwo
        } else {
            currentPlayer = playerOne
        }
    }

    // winning condition
    let gameOver = false
    function winCheck() {
        winCondition.forEach((item,index) => {
            if (board[item[0]] == currentPlayer.marker && board[item[1]] == currentPlayer.marker && board[item[2]] == currentPlayer.marker) {
                console.log("winner determined")
                gameOver = true
                displayController.printWinner()
            } else if (remainingMoves == 0 && gameOver == false) {
                gameOver = true
                displayController.printTie()
            } 
        })
    }

    // return 
    return {
        board,
        gameOver,
        currentPlayer,
        playerOne,
        playerTwo,
        nextPlayer,
    }
})()



const displayController = (() => {
    
    // function to highlight current player 

    let player1 = document.getElementById("player1")
    let player2 = document.getElementById("player2")
    function printCurrentPlayer() {
        if (currentPlayer == gameBoard.playerOne) {
            player1.style.backgroundColor = gameBoard.playerOne.color
            player2.style.backgroundColor = "#F8FAFC"
        } else {
            player1.style.backgroundColor = "#F8FAFC"
            player2.style.backgroundColor = gameBoard.playerTwo.color
        }
    
    }

    // print winner
    let gameState = document.querySelector(".gameState")
    function printWinner() {
        gameState.textContent = currentPlayer.name + " has won!"
        gameState.style.color = currentPlayer.color
    }
    
    // function to print Tie if no winner was determined after 9 moves

    function printTie() {
        gameState.textContent = "A Tie was determined!"
    }

    // reset button

    // return

    return {
        printCurrentPlayer,
        printWinner,
        printTie

    }
    
})()






