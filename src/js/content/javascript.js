'use strict';

var app = (function () {

    var docElem = document.documentElement,

        _userAgentInit = function () {
            docElem.setAttribute('data-useragent', navigator.userAgent);
        },
        _init = function () {
            _userAgentInit();
        };

    return {
        init: _init
    };

})();

$(function(){

    app.init();

    function amenitiesMore (e) {
        e.preventDefault();
        $(this).parent().parent().find('.hidden-services').slideDown('slow');
        $(this).fadeOut('slow');
    }

    function moreFunc (e) {
        e.preventDefault();
        $(this).parent().find('.hidden-more').slideDown('slow');
        $(this).parent().find('.hidden-content').addClass('shown');
        $(this).fadeOut('slow');
    }

    $('.amenities-more').on('click', amenitiesMore);
    $('.more').on('click', moreFunc);

    function showBookingMobile (e) {
        e.preventDefault();
        $('.booking__case-main-container').slideDown('fast').addClass('table');
    }

    function closeBookingMobile (e) {
        e.preventDefault();
        $('.booking__case-main-container').slideUp('fast').removeClass('table');
    }

    if ($(window).width() < 768) {
        $('.booking__submit').on('click', showBookingMobile);
        $('.booking__case-main-container .close').on('click', closeBookingMobile);
    }


});
