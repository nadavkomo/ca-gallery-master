(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

})(jQuery); // End of use strict

var gProjs = [{
        id: "guessMe",
        name: "Guess-Me",
        title: "choose someone and the app will guess how is it",
        desc: `Guess-Me is a computer game and mobile app.\nDuring gameplay, it attempts to determine what fictional or real-life "character" the player is thinking of by asking a series of questions (like the game Twenty Questions).\nIt uses an artificial intelligence program that learns the best questions to ask through its experience with players.`,
        // url: "projs/guessMe",
        publishedAt: Date.now(),
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "bookShop",
        name: "Book-Shop",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        // url: "projs/bookShop",
        publishedAt: Date.now(),
        labels: ["CRUDL"],
    },
    {
        id: "safeContent",
        name: "Safe-Content",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        // url: "projs/safeContent",
        publishedAt: Date.now(),
        labels: ["MVC"],
    },
    {
        id: "pacman",
        name: "Pacman",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        // url: "projs/pacman",
        publishedAt: Date.now(),
        labels: ["Board", "render"],
    }
]