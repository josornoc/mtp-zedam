$(function () {

    var nowDate = new Date();
    var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
    var dateRange = $('input[name="daterange"]');


    function callCalendar() {

        dateRange.dateRangePicker({
            inline:true,
            container: '#cal_container',
            alwaysOpen:true,
            singleMonth: true,
            lookBehind: false,
            showTopbar: false,
            selectForward: true,
            /*hoveringTooltip: function(days, startTime, hoveringTime)
             {
             return days > 1 ? days + ' ' + lang('days') : '';
             },*/
            showDateFilter: function(time, date)
            {
                return '<div>\
                            <span>'+date+'</span>\
                            <div class="points"><span class="points_span">'+Math.round(Math.random()*999)+'</span> <span class="text">puntos</span></div>\
                        </div>';
            },

            getValue: function()
            {
                if ($('#date-range200').val() && $('#date-range201').val() )
                    return $('#date-range200').val() + ' to ' + $('#date-range201').val();
                else
                    return '';
            },
            setValue: function(s,s1,s2)
            {
                $('#date-range200').val(s1).removeAttr('disabled');
                $('#date-range201').val(s2).removeAttr('disabled');
                $('.calendar__btn').removeClass('disabled');

                // containers
                $('#days_container').removeClass('disabled');
                $('#disponibility_container').removeClass('disabled');
            }
        });

    }

    $('.calendar__btn').on('click', toggleActiveCalendarBtn);

    function toggleActiveCalendarBtn (e) {
        e.preventDefault();

        if (!$(this).hasClass('disabled')) {
            $(this).toggleClass('enable');
            $('#cal_container').toggleClass('activated');
        }

        if ($(this).hasClass('enable')) {
            $('#points').removeAttr('disabled');
            $('#points_container').removeClass('disabled');
        } else {
            $('#points').attr('disabled', 'disabled');
            $('#points_container').addClass('disabled');
        }
    }

    $('#points').on('change blur keyup focus', updatePoints);

    function updatePoints(e) {
        var points = $(this).val();

        if (points != '') {
            $('.points_span').html(points);
            $('.checked').addClass('checked_points');
        } else {
            $('.checked').removeClass('checked_points');
        }
    }


    // Adds a length checker
    jQuery.fn.existance = function( func ) {

        this.length && func.apply( this );
        return this;

    };


    callCalendar();
    dateRange.existance(function () {
        //alert('a');
    });

});

