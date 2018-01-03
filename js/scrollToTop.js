$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.viewText').fadeIn();
        } else {
            $('.viewText').fadeOut();
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.ilike').fadeIn();
        } else {
            $('.ilike').fadeOut();
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.icomment').fadeIn();
        } else {
            $('.icomment').fadeOut();
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.ireport').fadeIn();
        } else {
            $('.ireport').fadeOut();
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.save-link').fadeIn();
        } else {
            $('.save-link').fadeOut();
        }
    });

    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500);
        return false;
    });
});