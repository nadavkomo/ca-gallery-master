'use strict'

const STORAGE_KEY = 'booksDB';
const STORAGE_IDX = 'indexCounter'
const PAGE_SIZE = 5;


var gBooks;
var gSortBy = 'id';
var gNamesBooks = ['Harry Poter', 'The Chronicles of Narnia', 'The Hunter Game']
var gPrices = [20, 35, 12]
var gImgsBooks = [
    '<img src="./imgs/harry-potter.jpg" alt="" srcset="">',
    '<img src="./imgs/The Chronicles of Narnia.jpg" alt="" srcset="">',
    '<img src="./imgs/The Hunter Game.jpg" alt="" srcset="">'
]

_createBooks()





function getBookById(bookId) {
    var book = gBooks.find(function(book) {
        return bookId === book.id
    })
    return book
}


function setSortBy(sortBy) {
    gSortBy = sortBy;
}

function getBooksSorted() {
    if (gSortBy === 'name') {
        gBooks.sort(function(a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        return gBooks;
    }
    if (gSortBy === 'id') {
        gBooks.sort(function(a, b) {
            var idA = a.id;
            var idB = b.id;
            if (idA < idB) {
                return -1;
            }
            if (idA > idB) {
                return 1;
            }
            return 0;
        });
        return gBooks
    }
    if (gSortBy === 'price') {
        gBooks.sort(function(a, b) {
            return a.price - b.price;
        });
        return gBooks
    }
}

function updateBook(bookId, name, price, img) {
    console.log(bookId);
    var bookIdx = gBooks.findIndex(function(book) {
        return book.id === bookId;
    })
    var book = gBooks[bookIdx];
    book.name = name
    book.price = price
    if (!img) {
        var img = './imgs/default.png'
    }
    var imgUrl = `<img src="${img}" alt="" srcset="">`
    book.img = imgUrl
    _saveBooksToStorage();
}

function addBook(name, price, img) {
    if (!img) {
        var img = './imgs/default.png'
    }
    var imgUrl = `<img src="${img}" alt="" srcset="">`
    var book = _createBook(name, price, imgUrl)
    gBooks.unshift(book)
    _saveBooksToStorage();
}

function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function(Book) {
        return bookId === Book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}

function incAmount(elBtn) {
    var elProductAmount = document.querySelector(`.modal .count`);
    var bookId = elBtn.classList[0]
    var book = getBookById(bookId)
    if (book.rate === '10') alert('INVALID AMOUNT!');
    else {
        book.rate++;
    }
    elProductAmount.innerText = book.rate
    _saveBooksToStorage()
    renderBooksTable()
}

function decAmount(elBtn) {
    var elProductAmount = document.querySelector(`.modal .count`);
    var bookId = elBtn.classList[0]
    var book = getBookById(bookId)
    if (book.rate.innerText === '0') alert('INVALID AMOUNT!');
    else {
        book.rate--
    }
    elProductAmount.innerText = book.rate
    _saveBooksToStorage()
    renderBooksTable()
}

function _createBook(name, price, img) {
    return {
        id: makeId(),
        name,
        price,
        img,
        rate: 0
    }
}


function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = [];
        for (var i = 0; i < 3; i++) {
            books.push(_createBook(gNamesBooks[i], gPrices[i], gImgsBooks[i]))
        }
    }
    gBooks = books;
    _saveBooksToStorage();
}