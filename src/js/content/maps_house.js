

var latLng = new google.maps.LatLng(49.47805, -123.84716);
var homeLatLng = new google.maps.LatLng(49.47805, -123.84716);

var map;
function initMap() {

    map = new google.maps.Map(document.getElementById('gmap_canvas'), {
        zoom: 14,
        center: latLng,
        disableDefaultUI: true,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
    });

    var content = '<div class="maps__search-container"><a href="" class="house__related-image">'+
        '<div class="background__container-animation lazyload" style="background-image: url(https://d2lirea7fsl1nf.cloudfront.net/pictures/attachments/5613/93c0/f987/8c62/8900/0333/large/mtp-dd6eb3470618bf308ad7679337d1464a67a4.jpg?1444123584)"></div>'+
        '<div class="house__related-points">'+
        '325 points' +
        '</div>' +
        '</a>' +

        '<a href="" class="house__related-info">'+
        '<div class="house__related-title">My first hotel</div>' +
        '<div class="house__related-description">'+
        '<span class="star__container">'+
        '<img alt="star" class="star" sizes="95px" src="images/mobile/layout/star_icon@2x.png">' +
        '<img alt="star" class="star" sizes="95px" src="images/mobile/layout/star_icon@2x.png">' +
        '<img alt="star" class="star" sizes="95px" src="images/mobile/layout/star_icon@2x.png">' +
        '<img alt="star" class="star" sizes="95px" src="images/mobile/layout/star_icon@2x.png">' +
        '<img alt="star" class="star" sizes="95px" src="images/mobile/layout/star_icon_off@2x.png">' +
        '</span>' +

        '<span class="reviews__amount">(36)</span>' +
        '</div>' +
        '</a></div>';

    var lb_options = {
        alignBottom: true,
        content: content,
        boxClass: 'map__search',
        infoBoxClearance: new google.maps.Size(10, 40),
        pixelOffset: new google.maps.Size(-137, 11)
    };

    var lb = new InfoBox(lb_options);

    var marker1 = new MarkerWithLabel({
        position: homeLatLng,
        draggable: false,
        raiseOnDrag: false,
    //    icon: image,
        map: map,
        crossImage: '',
        labelInBackground: true,
        labelContent: "325 points",
        labelAnchor: new google.maps.Point(40, 30),
        labelClass: "labels",
        labelStyle: {width: '200'}
    });

    google.maps.event.addListener(marker1, "click", function (e) {
        lb.open(map, this);
    });
}

if ($('.maps__house').length > 0) {
    google.maps.event.addDomListener(window, 'load', initMap);
}
