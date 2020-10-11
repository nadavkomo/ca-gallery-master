'use strict';

const STORAGE_KEY = 'QuestsDB'
    // NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ ans: 'yes' }, onUserResponse);
$('.btn-no').click({ ans: 'no' }, onUserResponse);
$('.btn-add-guess').click(onAddGuess);
$('.btn-close-modal').click(onCloseModal)


function init() {
    console.log('Started...');
    createQuestsTree();
}

function onStartGuessing() {
    $('.game-start').hide('fade')
    renderQuest();
    $('.quest').css("display", "block");
}

function renderQuest() {
    $('.quest h2').text(gCurrQuest.txt)
}

function onUserResponse(ev) {
    var res = ev.data.ans;
    console.log(res);
    // If this node has no children
    if (isChildless(getCurrQuest())) {
        if (res === 'yes') {
            console.log('Yes, I knew it!');
            $('.modal').css("display", "block");
            var strHtml = `<img src="img/${gCurrQuest.txt}.jpg">`
            $('.modal span').html(strHtml);
        } else {
            // alert('I dont know...teach me!');
            $('.quest').css("display", "none");
            $('.new-quest').css("display", "block");
            // TODO: hide and show new-quest section
        }
    } else {
        // TODO: update the lastRes global var
        gLastRes = res;
        moveToNextQuest(res);
        renderQuest();
    }
}

function onAddGuess(ev) {
    ev.preventDefault();
    var newGuess = $('#newGuess').val();
    var newQuest = $('#newQuest').val();
    addGuess(newQuest, newGuess, gLastRes)
    onRestartGame();
}

function onRestartGame() {
    gCurrQuest = gQuestsTree;
    $('.new-quest').hide();
    $('.game-start').show();
    gLastRes = null;
    _saveQuestsToStorage();
}

function onCloseModal() {
    onRestartGame();
    $('.modal').css("display", "none");
    $('.quest').css("display", "none");
}

function _saveQuestsToStorage() {
    saveToStorage(STORAGE_KEY, gQuestsTree)
}