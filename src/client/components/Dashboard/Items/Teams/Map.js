import React from 'react';

const exampleUserLocation = [
  { lat: 37.790629, lng: -122.401800, user_icon: 'https://tutsplus-media.s3.amazonaws.com/photo.tutsplus.com/uploads/2013/09/benlucas-web-portrait-16.jpg' },
  { lat: 37.786063, lng: -122.431807, user_icon: 'http://www.timo-wadenpohl.de/files/tw/content/about/timo_wadenpohl_portrait.jpg' },
  { lat: 37.759391, lng: -122.412258, user_icon: 'http://getparade.com/media/imagic/square3.jpg' },
  { lat: 37.762762, lng: -122.434837, user_icon: 'http://d38we5ntdyxyje.cloudfront.net/857749/profile/KZPZNEAZ_avatar_medium_square.jpg' }
];

const exampleUser = {
  name: 'Jessica Jones',
  user_icon: 'https://s-media-cache-ak0.pinimg.com/564x/7c/1d/15/7c1d156f6e62f5559e8fada72b2117f7.jpg'
}; 

/* global google */
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: { lat: 36.1699, lng: -115.1398 }, 
      map: null,
      markers: []
    };
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    this.initMap();
  }

  initMap() {
    // initialize google maps
    const center = { lat: 37.783913, lng: -122.409020 };
    const loc = this.state.location;
    const map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 13,
      styles: [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
    });
    
    for (let i = 0; i < exampleUserLocation.length; i++) {
      let infowindow = new google.maps.InfoWindow({
        content: '<img class="img-circle member-icon" src=\"' + exampleUserLocation[i].user_icon + '\" alt="avatar" />'
      });
      const marker = new google.maps.Marker({
        position: exampleUserLocation[i],
        map: map,
        title: 'Hello World!'
      });
      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
      infowindow.open(map, marker);
    }
  

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const infoWindow = new google.maps.InfoWindow({ map: map });
        infoWindow.setPosition(pos);
        infoWindow.setContent('<img class="img-circle user-icon" src=\"' + exampleUser.user_icon + '\" alt="avatar" />');
        map.setCenter(pos);
      }, () => {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  render() {
    return (
      <div className="map-container">
        <div id="map"></div>
      </div>
    );
  }

}

export default Map;
