$(document).ready(function(){
    var images=['betterbudapest/img/bg1.jpg',
        'betterbudapest/img/bg2.jpg',
        'betterbudapest/img/bg3.jpg'
    ];

    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(' + images[randomNumber] + ')';

    $('.bg-pict').css({'background-image':bgImg, 'background-size':'cover'});

});