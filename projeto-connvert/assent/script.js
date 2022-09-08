$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        responsive:{
            0:{
                item:1
            },
            600:{
                item:1
            },
            1200:{
                item:1
            }
        },
        autoplay: true,
        autoplayTimeout: 5000,
    });
})