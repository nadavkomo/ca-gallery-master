'use strict';
console.log('baloons!');

// var gCount = 100;
var gBalloons;
var gRaceInterval;
function resetRace() {
    gBalloons = [
        { bottom: 0, speed: 10 },
        { bottom: 0, speed: 15 },
        { bottom: 0, speed: 12 },
        { bottom: 0, speed: 11 },
        { bottom: 0, speed: 18 },
        { bottom: 0, speed: 9 },
        { bottom: 0, speed: 20 },
    ];
    renderBalloons();
    gRaceInterval = setInterval(moveBalloons, 500);
}

function moveBalloons() {
    var elMsg = document.querySelector('.race-end');
    elMsg.style.display = 'none'
    for (var i = 0; i < gBalloons.length; i++) {
        var currBalloon = gBalloons[i];
        currBalloon.bottom += currBalloon.speed;
        var elCurrBalloon = document.querySelector('.balloon' + (i + 1));
        elCurrBalloon.style.bottom = currBalloon.bottom + 'px';
        if (currBalloon.bottom >= 350) {
            clearInterval(gRaceInterval)
            elMsg.style.display = 'block'
        }
    }
}

function popIt(elBalloon) {
    var audio = new Audio('sound/Balloon-Popping.mp3');
    audio.play();
    elBalloon.classList.add('fade');
    
}


function renderBalloons() {
    var strHtml = '';
    for (var i = 0; i < gBalloons.length; i++) {
        strHtml += '<div onclick="popIt(this)" class="balloon balloon' + (i + 1) + '"></div>';
    }
    var elSun = document.querySelector('.sun');
    elSun.innerHTML = strHtml;
}

