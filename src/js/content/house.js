'use strict';



$(function(){

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

    if ($bookingCase.length > 0) {

        $(window).on('resize', function (e) {
            calculateBookingPosition();
        });

        $(window).on('scroll', function (e) {
            calculateBookingPosition();
        });
    }

});
