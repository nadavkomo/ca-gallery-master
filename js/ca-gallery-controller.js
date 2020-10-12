'use strict'

$(document).ready(init);



function init() {
    console.log('Starting up');
    renderGallery()
}

function renderGallery() {
    var strHTML = '';
    $('.portfolio-gallery').html(null);
    gProjs.forEach((proj) => {
        strHTML += `
        <div class="col-md-4 col-sm-6 portfolio-item ${proj.id}">
          <a class="portfolio-link ${proj.id}" data-toggle="modal" onclick="onOpenModal(this)">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid rounded-circle" src="img/portfolio/${proj.id}-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>`;
    })
    $('.portfolio-gallery').html(strHTML);
}

function renderModal(proj) {
    var strHTML = '';
    $('.modal').html(null);
    strHTML = `
    <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${proj.name}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
                </div>
                <div class="modal-body d-flex flex-wrap">
                    <img class="img-fluid" src="img/portfolio/${proj.id}-full.jpg" alt="">
                    <p>${proj.desc}</p>
                </div>
                <div class="modal-footer">
                    <a class="btn btn-primary" href="./projs/${proj.name}/index.html" target="_blank">check this app</a>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    `

    $('.modal').html(strHTML);
    $('.modal').modal('show');
}

function onSubmitEmail() {
    var email = $('#Email').val();
    var subject = $('#Subject').val();
    var message = $('#Message').val() + `\n My e-mail is ${email}`
    var regex = /\n/g
    var newMessage = message.replaceAll(regex, '%0D%0A')
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=nadavkomo@gmail.com&su=${subject}&body=${newMessage}`, '_blank');
    $('#Email').val('');
    $('#Subject').val('');
    $('#Message').val('');
}









function onOpenModal(elImg) {
    var classIdx = elImg.classList;
    var projId = classIdx[1];
    var proj = findProjById(projId);
    console.log(proj);
    renderModal(proj);
}