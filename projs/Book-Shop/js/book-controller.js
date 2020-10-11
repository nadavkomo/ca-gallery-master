'use strict'

function onInit() {
    renderBooksTable()
}

function renderBooksTable() {
    var books = getBooksSorted();
    var tbody = document.getElementById('tbody');
    tbody.innerHTML = null;
    var tr = `<tr>`;
    tr += `<td class="td-header" onclick="onSetSorting(this.textContent)">id</td>
           <td class="td-header" onclick="onSetSorting(this.textContent)">name</td>
           <td class="td-header" onclick="onSetSorting(this.textContent)">price</td>
           <td class="td-header">Action</td></tr>`;
    tbody.innerHTML += tr;
    books.forEach(function(book) {
        tr = `<tr>`;
        tr += `<td>${book.id}</td>
               <td>${book.name}</td>
               <td>${book.price}</td>
               <td><button onclick="onReadBook('${book.id}')">Read</button></td>
               <td><button onclick="onUpdateBook('${book.id}')">Update</button></td>
               <td><button onclick="onRemoveBook('${book.id}')">Delete</button></td>
               </tr>`;
        tbody.innerHTML += tr;
    })
}

function onSetSorting(sortBy) {
    setSortBy(sortBy)
    renderBooksTable();
}


function onCloseModal() {
    document.querySelector('.modal').hidden = true
}

function onReadBook(bookId) {
    var book = getBookById(bookId)
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h5').innerText = book.name
    elModal.querySelector('h6').innerText = book.price
    elModal.querySelector('p').innerHTML = book.img
    var elRate = document.querySelector('.modal .rate')
    elRate.innerHtml = null;
    var strHTML = `<span>Rate It</span>
                   <button class="${bookId}" onclick="incAmount(this)">+</button>
                   <p class="count">${book.rate}</p>
                   <button class="${bookId}" onclick="decAmount(this)">-</button>`
    elRate.innerHTML = strHTML;
    elModal.hidden = false;
}

function onAddBook() {
    var elName = document.querySelector('.add-book input[name=name]');
    var elPrice = document.querySelector('.add-book input[name=price]');
    var elImg = document.querySelector('.add-book input[name=img]')
    var name = elName.value;
    var price = elPrice.value;
    var img = elImg.value;
    addBook(name, price, img);
    elName.value = '';
    elPrice.value = '';
    elImg.value = '';
    renderBooksTable();
}

function onRemoveBook(bookId) {
    console.log(bookId);
    removeBook(bookId)
    renderBooksTable()
}

function onUpdateBook(bookId) {
    var elName = document.querySelector('.update-book input[name=name]');
    var elPrice = document.querySelector('.update-book input[name=price]');
    var elImg = document.querySelector('.update-book input[name=img]')
    var name = elName.value;
    var price = elPrice.value;
    var img = elImg.value;
    updateBook(bookId, name, price, img);
    elName.value = '';
    elPrice.value = '';
    elImg.value = '';
    renderBooksTable();
}