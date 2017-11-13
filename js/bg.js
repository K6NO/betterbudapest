$(document).ready(function(){
    var images=['img/bg1.JPG',
        'img/bg2.jpg',
        'img/bg3.JPG'
    ];

    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(' + images[randomNumber] + ')';

    $('.bg-pict').css({'background-image':bgImg, 'background-size':'cover'});

});