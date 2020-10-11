var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    gQuestsTree = loadFromStorage(STORAGE_KEY)
    gCurrQuest = gQuestsTree;
    if (gQuestsTree) {
        console.log(gQuestsTree);
        return
    }
    gQuestsTree = createQuest('Male?');
    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null,
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    gPrevQuest = gCurrQuest;
    gCurrQuest = gPrevQuest[res]
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    var lastGuess = gCurrQuest.txt
    gCurrQuest.txt = newQuestTxt;
    gCurrQuest.yes = createQuest(newGuessTxt)
    gCurrQuest.no = createQuest(lastGuess)
}

function getCurrQuest() {
    return gCurrQuest
}