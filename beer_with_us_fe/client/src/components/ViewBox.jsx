var React = require('react');
var ViewMap = require('./ViewMap')
var BrewerySelector = require('./BrewerySelector')
var BreweryInfo = require('./BreweryInfo')

var ViewBox = React.createClass({

  getInitialState: function() {
    return {
      center:{lat: 56.4907, lng: -4.2026},
      data: [],
      brewery: null,
      zoom: 6,
      beers: [],
      beer: undefined
    };
  },

  loadBrewriesFromServer: function(){
    let url = this.props.url
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = function(){
        if(request.status === 200){
          var info = JSON.parse(request.responseText);
          this.setState
          ({data: info})
        }
      }.bind(this)
      request.send(null);
    },

    componentDidMount: function() {
      this.loadBrewriesFromServer()
    },

    markers: function(){
      return this.state.data.map(function(info){
        return {lat: info.lat, lng: info.lng}
      })
    },

    brewery: function(id){
      this.state.data.find(function(info){
        if(info.id === +id)
          this.setState({
            brewery:info,
            zoom: 10, 
            center: {lat: +info.lat, lng: +info.lng} 
          });
      }.bind(this))
    },

    loadBeersFromServer: function(url){
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.setRequestHeader("Content-Type", "application/json");
        request.onload = function(){
          if(request.status === 200){
            var info = JSON.parse(request.responseText);
            this.setState
            ({beers: info})
          }
        }.bind(this)
        request.send(null);
    },

    beerUpdate: function(id){
      console.log(id);
      this.state.beers.filter(function(beer){
        console.log(beer.id)
        if(beer.id === id)
          this.setState({
            beer: beer
          });
      }.bind(this))
    },


  render: function() {
    return (
      <div>
      <h1>Beers With Us</h1>
      <BrewerySelector 
        data={this.state.data}
        brewery={this.brewery}
        load={this.loadBeersFromServer}
      />
      <BreweryInfo 
        brewery={this.state.brewery}
        beers={this.state.beers}
        beerUpdate={this.beerUpdate}
        beer={this.state.beer}
      />
      <ViewMap 
        center={this.state.center}
        markers={ this.markers() }
        brewery={this.state.brewery}
        zoom={this.state.zoom}
        data={this.state.data}
      />
    </div>
    );
  }

});

module.exports = ViewBox;