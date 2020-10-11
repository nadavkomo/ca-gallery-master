'use strict'
const WALL = '🧱'
const FOOD = '🥩'
const EMPTY = ' ';
const SUPER = '🍺';
const CHERRY = '🍒';


var gBoard;
var gGame = {
    score: 0,
    isOn: false
}
var gIntervalCherry;
function init() {
    console.log('hello')
    gBoard = buildBoard()
    createPacman(gBoard);
    createGhosts(gBoard);
    printMat(gBoard, '.board-container')
    gGame.isOn = true
}

function buildBoard() {
    var SIZE = 10;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
            }
            if ((i === 1 || i === 8) && (j === 1 || j === 8)) {
                board[i][j] = SUPER;
            }
        }
    }
    return board;
}

function updateScore(diff) {
    gGame.score += diff;
    document.querySelector('h2 span').innerText = gGame.score
    if (gGame.score === 56) victory();
}

function resetGame() {
    gGame.score = 0;
    document.querySelector('h2 span').innerText = gGame.score
    closeModal();
    console.log('hello')
    gBoard = buildBoard()
    createPacman(gBoard);
    createGhosts(gBoard);
    printMat(gBoard, '.board-container')
    gGame.isOn = true
}
function resetGameVic() {
    gGame.score = 0;
    document.querySelector('h2 span').innerText = gGame.score
    closeModalVic();
    console.log('hello')
    gBoard = buildBoard()
    createPacman(gBoard);
    createGhosts(gBoard);
    printMat(gBoard, '.board-container')
    gGame.isOn = true
}

function closeModal() {
    clearInterval(gIntervalCherry)
    clearInterval(gIntervalGhosts);
    var modal = document.querySelector('.modal-close');
    modal.style.display = "none";
}
function closeModalVic() {
    clearInterval(gIntervalCherry)
    clearInterval(gIntervalGhosts);
    var modalVic = document.querySelector('.modal-victory');
    modalVic.style.display = "none";

}

function gameOver() {
    clearInterval(gIntervalCherry)
    clearInterval(gIntervalGhosts);
    console.log('Game Over');
    gGame.isOn = false;
    var modal = document.querySelector('.modal-close');
    modal.style.display = "block";
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function victory() {
    clearInterval(gIntervalCherry)
    clearInterval(gIntervalGhosts);
    console.log('VICTORY');
    var modalVic = document.querySelector('.modal-victory')
    modalVic.style.display = "block"
}

gIntervalCherry = setInterval(addCherry, 15000);

function addCherry() {
    var emptyCells = [];
    emptyCells = getEmptyCell(gBoard);
    var rndIdx = getRandomIntInclusive(0, emptyCells.length - 1)
    var emptyCell = {};
    emptyCell = emptyCells[rndIdx];
    gBoard[emptyCell.i][emptyCell.j] = CHERRY;
    renderCell(emptyCell, CHERRY)
}

function getEmptyCell(board) {
    var emptyCells = [];
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            var cell = board[i][j]
            if (cell === ' ') {
                emptyCells.push({ i, j });
            }
        }
    }
    return emptyCells;
}

function alertSuper() {
    var elAlertSuper = document.querySelector('.alert-super')
    if(gPacman.isSuper){
        elAlertSuper.style.display = "block";
    }
    if(!gPacman.isSuper) {
        elAlertSuper.style.display = "none";
    }
}