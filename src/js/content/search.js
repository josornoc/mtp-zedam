$(function () {

    var doubleNumberRange = $('#double_number_range');
    var inputDateRange = $('.input-daterange');

    doubleNumberRange.existance(function(){
        /* Search */
        doubleNumberRange.ionRangeSlider({
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
    });

    var nowDate = new Date();
    var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);

    inputDateRange.datepicker({
        autoclose: true,
        todayHighlight: true,
        startDate: today,
        language: 'es',
        orientation: 'auto'
    });

    if ($('body').hasClass('home')) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > $('.home__search').offset().top - 60) {
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

    /* Mis Casas */
    function publishHouse(e) {
        e.preventDefault();
        var container = $(this).parent();

        if (container.hasClass('true')) {
            container.removeClass('true');
        } else {
            container.addClass('true');
        }
    }

    $.fn.hasAttr = function(name) {
        return this.attr(name) !== undefined;
    };

    function searchMultiple (e) {
        e.preventDefault();

        $(this).toggleClass('multiple');
        $('.search__extra-info').toggleClass('show-multiple');

        var inputSelect = $('.filters__container').find('input[type=text]');

        if(inputSelect.hasAttr('readonly')) {
            inputSelect.removeAttr('readonly');
        } else {
            inputSelect.attr('readonly', 'readonly');
        }

        var inputCheckbox = $('.filters__container').find('input[type=checkbox], select');

        if(inputCheckbox.hasAttr('disabled')) {
            inputCheckbox.removeAttr('disabled');
        } else {
            inputCheckbox.attr('disabled', 'disabled');
        }

        $('.search__sidebar').toggleClass('disabled');
    }

    function updateSelected () {
        $('#houses-selected').html($('.search__sidebar').find('.selected').length);
    }

    function selectMultiple(e) {
        e.preventDefault();
        $(this).parents('.search__house-item').toggleClass('selected');

        updateSelected();
    }

    var homeSubsearchDate = $('.home__subsearch-date');
    var homeSubsearchLocation = $('.home__subsearch-location');
    var myHousesState = $('.my-houses__state-item-btn');
    var multipleSearch = $('.js-multiple-search');
    var houseRelatedAction = $('.house__related-select-action');


    homeSubsearchDate.on('click', showSubSearchDate);
    homeSubsearchLocation.on('click', showSubSearchLocation);

    myHousesState.on('click', publishHouse);
    multipleSearch.on('click', searchMultiple);
    houseRelatedAction.on('click', selectMultiple);
});
