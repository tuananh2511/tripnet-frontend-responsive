$(document).ready(function() {
    $(".a-contact, .a-post, .a-about, .a-search").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function() {
                window.location.hash = hash;
            });
        }
    });
});