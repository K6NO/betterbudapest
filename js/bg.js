$(document).ready(function(){
    var images=['/website_better_budapest/img/bg1.jpg',
        '/website_better_budapest/img/bg2.jpg',
        '/website_better_budapest/img/bg3.jpg'
    ];

    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(' + images[randomNumber] + ')';

    $('.bg-pict').css({'background-image':bgImg, 'background-size':'cover'});

});