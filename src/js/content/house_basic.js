// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

$(function(){

    var image = new google.maps.MarkerImage('images/mobile/layout/marker@2x.png', null, null, null, new google.maps.Size(26,40));
    var latLng = new google.maps.LatLng(41.385064, 2.173403);

    $("#geocomplete_cities").geocomplete({
        types: ['(cities)'],
        componentRestrictions: {}
    }).bind("geocode:result", function(event, result){
        $('#tag_name').val(result.address_components[0].short_name);
    });

    $('#add_tag').on('click', addTag);

    function addTag (e) {
        e.preventDefault();

        if ($('#tag_name').val() != '') {
            $('.tag__container').append('<a href="" class="tag">' +$('#tag_name').val()+ '</a>');
        }

        $('#tag_name').val('');
        $('#geocomplete_cities').val('');
    }

    $("#geocomplete").geocomplete({
        map: ".map_canvas",
        mapOptions: {
            zoom: 10,
            center: latLng,
            disableDefaultUI: true,
            zoomControl: true,
            scaleControl: false,
            scrollwheel: false
        },
        details: ".form__container",
        types: ["geocode", "establishment"],
        markerOptions: {
            draggable: false,
            icon: image
        },
    }).bind("geocode:result", function(event, result){
        $('.form__cell-container').slideDown('slow');
    });

    function setSaveButton () {
        $('.profile__save.booking__submit').removeClass('disable');
        $('.light_grey.disable').removeClass('disable');
    }

    // Rating stars
    $(".rateYo").rateYo({
        normalFill: "#cccccc",
        ratedFill: "#77C5D5",
        starWidth: "40px",
        fullStar: true,
        onSet: function (rating, rateYoInstance) {
            setSaveButton();
        }
    });

    $(document).on('change', 'input, select, textarea', function () {
        setSaveButton();
    });
});
