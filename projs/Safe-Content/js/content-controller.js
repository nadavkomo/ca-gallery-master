'use strict'

function onInit() {
    checkFromLocalStorage();
}

function onAdminInit() {
    renderAdminTable()
}

function onLogin() {
    var elUserName = document.querySelector('.username-input');
    var txtUserName = elUserName.value
    var elPassword = document.querySelector('.password-input');
    var txtPassword = elPassword.value
    if (checkLogin(txtUserName, txtPassword)) {
        var user = gUsers.find(function(user) {
            return user.userName === txtUserName;
        })
        saveToStorage('loggedUser', user)
        saveToStorage('users', gUsers)
        renderPage();
    }
}

function onLogout() {
    logout();
}

function onSetSorting(sortBy) {
    setSortBy(sortBy)
    renderAdminTable();
}