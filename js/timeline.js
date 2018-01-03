$(function() {

    window.sr = ScrollReveal();

    if ($(window).width() < 768) {

        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    } else {

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    }

    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });


});

function openComments() {
    document.getElementById("comment").style.width = "400px";
    document.getElementById("myContent").style.marginRight = "400px";
    document.getElementById("viewText").style.right = "400px";
    document.getElementById("saveLink").style.right = "400px";
    document.getElementById("toTop").style.right = "400px";
    document.getElementById("icomment").style.right = "400px";
    document.getElementById("ireport").style.right = "400px";
    document.getElementById("ilike").style.right = "400px";
    document.getElementById("report").style.width = "0";
}

function closeComments() {
    document.getElementById("comment").style.width = "0";
    document.getElementById("myContent").style.marginRight = "0";
    document.getElementById("viewText").style.right = "0";
    document.getElementById("saveLink").style.right = "0";
    document.getElementById("toTop").style.right = "0";
    document.getElementById("icomment").style.right = "0";
    document.getElementById("ireport").style.right = "0";
    document.getElementById("ilike").style.right = "0";
}

function openReport() {
    document.getElementById("report").style.width = "400px";
    document.getElementById("myContent").style.marginRight = "400px";
    document.getElementById("viewText").style.right = "400px";
    document.getElementById("saveLink").style.right = "400px";
    document.getElementById("toTop").style.right = "400px";
    document.getElementById("icomment").style.right = "400px";
    document.getElementById("ireport").style.right = "400px";
    document.getElementById("ilike").style.right = "400px";
    document.getElementById("comment").style.width = "0";
}

function closeReport() {
    document.getElementById("report").style.width = "0";
    document.getElementById("myContent").style.marginRight = "0";
    document.getElementById("viewText").style.right = "0";
    document.getElementById("saveLink").style.right = "0";
    document.getElementById("toTop").style.right = "0";
    document.getElementById("icomment").style.right = "0";
    document.getElementById("ireport").style.right = "0";
    document.getElementById("ilike").style.right = "0";
}


$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});