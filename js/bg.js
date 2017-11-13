$(document).ready(function(){
<<<<<<< HEAD
    var images=['../img/bg1.jpg',
        '../img/bg2.jpg',
        '../img/bg3.jpg'
=======
    var images=['img/bg1.jpg',
        'img/bg2.jpg',
        'img/bg3.jpg'
>>>>>>> gh-pages
    ];

    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(' + images[randomNumber] + ')';

    $('.bg-pict').css({'background-image':bgImg, 'background-size':'cover'});

});