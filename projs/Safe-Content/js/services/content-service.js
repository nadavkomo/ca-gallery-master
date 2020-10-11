'use strict'

var gId = 100;
var gNames = ['Elon', 'Dvir', 'Noam']
var gPasswords = ['123', '456', '789']
var boleansIsAdmin = [false, true, false]
var gSortBy = 'TEXT'
var gUsers = _createUsers()
    // [
    //     { id: 'u101', userName: 'Elon', password: 'secret1', lastLoginTime: 1601891998864, isAdmin: false },
    //     { id: 'u102', userName: 'Dvir', password: 'secret2', lastLoginTime: 1601891998874, isAdmin: true },
    //     { id: 'u103', userName: 'Noam', password: 'secret3', lastLoginTime: 1601891998884, isAdmin: false },
    // ]

function checkFromLocalStorage() {
    var loggedUser = loadFromStorage('loggedUser')
    var elAvatar = document.querySelector(`.${loggedUser.userName}`)
    elAvatar.classList.remove('hidden')
    var elUserNameSpan = document.querySelector('.username');
    elUserNameSpan.innerHTML = loggedUser.userName;
    elUserNameSpan.classList.remove('hidden');
    var user = loadFromStorage('loggedUser')
    if (user.isAdmin === true) {
        var elHref = document.querySelector('.href-admin')
        elHref.classList.remove('hidden');
    }
    var elSecretContent = document.querySelector('.secret-content');
    elSecretContent.classList.remove('hidden');
}



function checkLogin(txtUserName, txtPassword) {
    if (!gUsers.find(function(user) {
            return user.userName === txtUserName;
        })) {
        alert('username/password is incorrect!');
        return false;
    }
    if (!gUsers.find(function(user) {
            return user.password === txtPassword;
        })) {
        alert('username/password is incorrect!');
        return false;
    }
    return true;
}

function renderPage() {
    var elSecretContent = document.querySelector('.secret-content');
    elSecretContent.classList.remove('hidden');
    var elUserName = document.querySelector('.username-input');
    var txtUserName = elUserName.value
    var elUserNameSpan = document.querySelector('.username');
    elUserNameSpan.innerHTML = txtUserName;
    elUserNameSpan.classList.remove('hidden');
    var user = loadFromStorage('loggedUser')
    if (user.isAdmin === true) {
        var elHref = document.querySelector('.href-admin')
        elHref.classList.remove('hidden');
    }
}

function renderPageAvatar(elAvatar) {
    var idxClasslist = elAvatar.classList;
    var user = gUsers.filter(function(user) {
        return user.userName === idxClasslist[0]
    });
    console.log(user);
    var elUserNameSpan = document.querySelector('.username');
    elUserNameSpan.innerHTML = user[0].userName
    elUserNameSpan.classList.remove('hidden');
    var elSecretContent = document.querySelector('.secret-content');
    elSecretContent.classList.remove('hidden');
    if (user[0].isAdmin === true) {
        var elHref = document.querySelector('.href-admin')
        elHref.classList.remove('hidden');
    }
}

function logout() {
    var elSecretContent = document.querySelector('.secret-content');
    elSecretContent.classList.add('hidden');
    var elUserNameSpan = document.querySelector('.username');
    elUserNameSpan.classList.add('hidden');
    deleteItem(elUserNameSpan.innerText);
    var elHref = document.querySelector('.href-admin')
    elHref.classList.add('hidden');
    var elAvatars = document.querySelectorAll('.avatar')
    elAvatars.forEach(function(avatar) {
        avatar.classList.add('hidden');
    });
    localStorage.clear()
}

function renderAdminTable() {
    var users = getUsersSorted()
    if (!users) users = gUsers;
    var tbody = document.getElementById('tbody');
    console.log(tbody)
    tbody.innerHTML = null;
    var tr = '<tr>';
    tr += '<td class="td-header">userName</td class="td-header">' + '<td class="td-header">password</td class="td-header">' + '<td class="td-header">lastLoginTime</td class="td-header">' + '<td class="td-header">isAdmin</td class="td-header"> </tr>';
    tbody.innerHTML += tr;
    for (var i = 0; i < users.length; i++) {
        tr = '<tr>';
        tr += '<td>' + users[i].userName + '</td>' + '<td>' + users[i].password.toString() + '</td>' + '<td>' + users[i].lastLoginTime.toString() + '</td>' + '<td>' + users[i].isAdmin.toString() + '</td> </tr>';
        tbody.innerHTML += tr;
    }
}

function setSortBy(sortBy) {
    gSortBy = sortBy;
}

function getUsersSorted() {
    if (gSortBy === 'NAME') {
        gUsers.sort(function(a, b) {
            var nameA = a.userName.toUpperCase();
            var nameB = b.userName.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        return gUsers;
    }
    if (gSortBy === 'LAST-LOGIN') {
        gUsers.sort(function(a, b) {
            return a.lastLoginTime - b.lastLoginTime;
        });
        return gUsers
    }
}

function addTodo(txt) {
    gTodos.unshift(_createTodo(txt))
    saveToStorage(STORAGE_KEY, gTodos);
}
// Those functions are PRIVATE - not to be used outside this file!


function _createUser(userName, password, isAdmin) {
    return {
        id: gId++,
        userName,
        password,
        lastLoginTime: Date.now(),
        isAdmin,
    }
}


function _createUsers() {
    var users = [];
    for (var i = 0; i < 3; i++) {
        users.push(_createUser(gNames[i], gPasswords[i], boleansIsAdmin[i]))
    }
    return users;
}