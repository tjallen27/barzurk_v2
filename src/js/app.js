/* global google:ignore mapStyles:ignore*/
$(()=>{

  console.log('JS loaded!');

  const $map = $('#map');
  let map = null;
  if ($map.length) initMap();
  const $slider = $('#slider1');
  let infowindow = null;
  const circle = new google.maps.Circle({
    fillColor: '#3399FF',
    fillOpacity: 0.2,
    strokeColor: '#0099FF',
    strokeOpacity: 0.4
  });

  $slider.on('change', (e) => {
    if(circle.map) {
      circle.setRadius(parseFloat($(e.target).val()));
      map.fitBounds(circle.getBounds());
    }
  });

  function initMap() {
    console.log(users);
    var center = {lat: 51.515113, lng: -0.072051};
    map = new google.maps.Map($map.get(0), {
      zoom: 13,
      center: center,
      scrollwheel: false,
      styles: mapStyles
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map.setCenter(pos);
        circle.setMap(map);
        circle.setCenter(pos);
        //Store val of slider
        circle.setRadius(parseFloat($slider.val()));
        // Add the circle for this city to the map.
        map.fitBounds(circle.getBounds());
      });
    }

    const users = $('#map').data('users');
    function addMarkers(){
      users.forEach((user) => {
        const marker = new google.maps.Marker({
          position: { lat: parseFloat(user.address.lat), lng: parseFloat(user.address.lng) },
          map: map,
          icon: '../assets/images/marker2.png' // Adding a custom icon
        });
        google.maps.event.addListener(marker, 'click', function() {
          location.href =`users/${user._id}`;
        });
        marker.addListener('mouseover', () => {
          markerClick(marker, user);
        });
      });
    }
    addMarkers();
  }

  function markerClick(marker, user) {

    // If there is an open infowindow on the map, close it
    if(infowindow) infowindow.close();

    // Locate the data that we need from the individual bike object
    const pubName = user.pubName;
    console.log(pubName);
    // Update the infowindow variable to be a new Google InfoWindow
    infowindow = new google.maps.InfoWindow({
      content: `
      <div class="infowindow">
        <p>${pubName}</p>
      </div>
      `
    });

    // Finally, open the new InfoWindow
    infowindow.open(map, marker);
  }

  $('.go_back_btn').on('click', goBack);
  function goBack() {
    window.history.back();
  }

  //Change nav styling on number of li's
  const $lis = $('.nav-item');
  const $nav = $('.navbar-nav');
  if ($lis.length < 4) {
    $lis.css('margin', '0 10px');
    $nav.css('width', '50%');
  }

  var currentValue = $('#currentValue');

  $('#slider1').change(function(){
    currentValue.html(this.value / 1000 + 'km');
  });

  $('#slider1').change();
});
