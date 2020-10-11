'use strict'
const PACMAN = '😷';

var countSuper = 0;
var gPacman;
function createPacman(board) {
    gPacman = {
        location: {
            i: 3,
            j: 5
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN
}
function movePacman(ev) {

    if (!gGame.isOn) return;
    // console.log('ev', ev);
    var nextLocation = getNextLocation(ev)

    if (!nextLocation) return;
    // console.log('nextLocation', nextLocation);

    var nextCell = gBoard[nextLocation.i][nextLocation.j]
    // console.log('NEXT CELL', nextCell);

    if (nextCell === WALL) return;
    if (nextCell === FOOD) updateScore(1);
    else if (nextCell === CHERRY) updateScore(10);
    else if (nextCell === SUPER) {
        countSuper++;
        gPacman.isSuper = true;
        alertSuper()
        if (countSuper === 1) {
            setTimeout(function () {
                createGhosts(gBoard);
                gPacman.isSuper = false;
                alertSuper();
                countSuper = 0;
            }, 5000)
        }else return;
    }
    else if (nextCell === GHOST) {
        if (!gPacman.isSuper) {
            renderCell(gPacman.location, EMPTY)
            gameOver();
            return;
        }
        gGhosts.pop();
    }
    else if (nextCell === GHOST_SCREAM) {
        gGhosts.pop();
    }
    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;

    // update the dom
    renderCell(gPacman.location, EMPTY);

    gPacman.location = nextLocation;

    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;
    // update the dom
    renderCell(gPacman.location, PACMAN);


}


function getNextLocation(eventKeyboard) {
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }
    switch (eventKeyboard.code) {
        case 'ArrowUp':
            nextLocation.i--;
            break;
        case 'ArrowDown':
            nextLocation.i++;
            break;
        case 'ArrowLeft':
            nextLocation.j--;
            break;
        case 'ArrowRight':
            nextLocation.j++;
            break;
        default:
            return null;
    }
    return nextLocation;
}