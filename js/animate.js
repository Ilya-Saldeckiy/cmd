$(document).ready(function(){
    $(".menu-list-item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".animate-btn").click(function() {
        $('html, body').animate({
            scrollTop: $(".premium-container").offset().top 
        }, 1000);
    });
});