var React = require('react');


var ViewMap = React.createClass({

  getInitalState: function(){
    return { map : null, markers: [] }
  },

  componentDidMount: function(){
    var div = this.refs.myMap;
    var googleMap = new google.maps.Map( div, {
      center: this.props.center,
      scrollwheel: false,
      zoom: this.props.zoom
    });
    // var input = this.refs.searchBox;
    // console.log(input)
    // // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // // var searchBox = new google.maps.places.SearchBox(input);
    this.setState({
      map:googleMap
    });
  },

  componentWillReceiveProps: function(nextProps){
    this.findBrewery(nextProps.center, nextProps.zoom);
    if(nextProps.brewery){
      this.breweriesMarker( this.state.map , [ nextProps.brewery ])
    }else{
      this.breweriesMarker( this.state.map , nextProps.data )
    }
  },

  findBrewery: function(center, zoom){
    this.state.map.setCenter(center);
    this.state.map.setZoom(zoom);
  },


  markerMaker: function(map, position, info){
    var infowindow = new google.maps.InfoWindow({
      content: info,
      maxWidth: 200
    });
    var marker = new google.maps.Marker({
      position: position,
      map: map,
    })
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
    return marker
  },

  breweriesMarker: function(map, data){
    this.removeAllMarkers()
    let markers = data.map(function(brewery){
      return this.markerMaker(map, {lat: +brewery.lat, lng: +brewery.lng}, brewery.name)
    }.bind(this) )
    this.setState( {markers: markers} )
  },

  removeAllMarkers: function(){
    if(!this.state.markers) {return}
    this.state.markers.forEach(function(marker){
      marker.setMap(null);
    })
  },


  render: function() {
    return (
      <div id="mapDiv">
        <div id="map" ref="myMap"> </div>
        <input ref="searchBox"></input>
      </div>
    );
  }

});

module.exports = ViewMap;