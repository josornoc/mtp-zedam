$(function () {

    /* Search */
    $("#double_number_range").ionRangeSlider({
        type: "double",
        min: 0,
        max: 400,
        from: 24,
        to: 128,
        step: 1,
        onStart: function (data) {
            console.log(data);
        },
        onChange: function (data) {
            console.log(data);
        },
        onFinish: function (data) {
            console.log(data);
        },
        onUpdate: function (data) {
            console.log(data);
        }
    });

    var nowDate = new Date();
    var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);

    $('.input-daterange').datepicker({
        autoclose: true,
        todayHighlight: true,
        startDate: today,
        language: 'es',
        orientation: 'top auto'
    });

    if ($('body').hasClass('home')) {
        $(window).scroll(function () {
            console.log($('.home__search').offset().top);
            if ($(window).scrollTop() > $('.home__search').offset().top) {
                $('.header').removeClass('home');
            } else {
                $('.header').addClass('home');
            }
        });
    }

    function showSubSearchDate (e) {
        e.preventDefault();
        $('.home__subsearch').addClass('show-dates');
    }

    function showSubSearchLocation (e) {
        e.preventDefault();
        $('.home__subsearch').removeClass('show-dates');
    }

    $('.home__subsearch-date').on('click', showSubSearchDate);
    $('.home__subsearch-location').on('click', showSubSearchLocation);

});
