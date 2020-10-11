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
        publishedAt: '10/7/2020',
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "bookShop",
        name: "Book-Shop",
        title: "manage your book shop by yourself",
        desc: "A web page that allows a bookstore manager to organize the store using a variety of features.",
        publishedAt: '10/6/2020',
        labels: ["CRUDL"],
    },
    {
        id: "safeContent",
        name: "Safe-Content",
        title: "Keep your information only for those who are intended",
        desc: "With this app you can keep the information that is important to you in complete privacy and in addition manage the permissions through a dedicated administrator page",
        publishedAt: '10/5/2020',
        labels: ["MVC"],
    },
    {
        id: "pacman",
        name: "Pacman",
        title: "eat all the steaks and try to sty alive from the ghost",
        desc: `Pac-Man[a] is a maze arcade game developed and released by Namco in 1980.\nThe original Japanese title of Puck Man was changed to Pac-Man for international releases as a preventative measure against defacement of the arcade machines by changing the P to an F.\nOutside Japan, the game was published by Midway Games as part of its licensing agreement with Namco America.\nThe player controls Pac-Man, who must eat all the dots inside an enclosed maze while avoiding four colored ghosts.\nEating large flashing dots called "energizers" causes the ghosts to turn blue, allowing Pac-Man to eat them for bonus points.`,
        publishedAt: '9/22/2020',
        labels: ["Board", "render"],
    },
    {
        id: "baloonsPop",
        name: "Baloons-Pop",
        title: "race between you and the baloons, try to pop them all",
        desc: `Your goal is to blow up all the balloons before they reach the sun and there the game will end.\n
        When the balloon explodes, a sound will be happy which will illustrate the event to the user.`,
        publishedAt: '9/16/2020',
        labels: ["Baloons", "render"],
    }
]

function findProjById(projId) {
    return gProjs.find((proj) => {
        return proj.id === projId;
    })
}