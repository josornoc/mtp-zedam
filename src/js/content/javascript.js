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

    var $bookingCase = $('.booking__case');
    var $bookingMainCase = $('.booking__case-main-container');


    function calculateBookingPosition () {
        if ($(window).width() > 992) {

            if ($(window).scrollTop() > parseInt($('.image__container').height())-40) {
                $bookingMainCase.addClass('show-sub-menu');

                if ($(window).scrollTop() < $('#map').offset().top - $('.booking__case-main-container').height() - 140) {
                    $bookingMainCase.addClass('fixed');
                    $bookingMainCase.css('top', 100);
                } else {
                    $bookingMainCase.removeClass('fixed');
                    $bookingMainCase.css('top', $('#map').offset().top - $('.booking__case-main-container').height() - parseInt($('.image__container').height() + 100));
                }

            } else {
                $bookingMainCase.removeClass('show-sub-menu');
                $bookingMainCase.removeClass('fixed');
                $bookingMainCase.css('top', 0);
            }

        } else {
            $bookingMainCase.removeClass('fixed');
            $bookingMainCase.css('top', 0);
        }
    }

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
        $('.booking__case-main-container').slideDown('fast');
    }

    function closeBookingMobile (e) {
        e.preventDefault();
        $('.booking__case-main-container').slideUp('fast');
    }

    if ($(window).width() < 768) {
        $('.booking__submit').on('click', showBookingMobile);
        $('.booking__case-main-container .close').on('click', closeBookingMobile);
    }

    if ($bookingCase.length > 0) {

        $(window).on('resize', function (e) {
            calculateBookingPosition();
        });

        $(window).on('scroll', function (e) {
            calculateBookingPosition();
        });
    }

});
