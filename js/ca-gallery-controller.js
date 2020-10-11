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
        console.log(proj);
        strHTML += `
        <div class="col-md-4 col-sm-6 portfolio-item ${proj.id}">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>`;
    })
    $('.portfolio-gallery').html(strHTML);
}