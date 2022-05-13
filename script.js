const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""]
    return {
        board
    }
})()

const displayController = (() => {

})()

const Player = (name, symbol) => {
    const getName = () => name
    const getSymbol = () => symbol
    return {name, symbol}
}

