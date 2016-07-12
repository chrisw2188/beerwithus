var React = require('react');
var BeerInfo = require('./BeerInfo')

var BreweryInfo = React.createClass({

  handleClick: function(e){
    this.props.beerUpdate(e.target.value)
  },

  render: function() {
    if(!this.props.brewery){
      return (
        <div id="info">
        <img  id="stillGame"src="http://www.stillgame.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/s/g/sg_tour_pint_glass.jpg"/>
        </div>
      );
    }
   var beers = this.props.beers.map(function(beer){
      return <li onClick={this.handleClick} value={beer.id} key={beer.id}>{beer.name}</li>
    }.bind(this))




    return (
      <div id="info">
        <div id="breweryData">
        <h4>{this.props.brewery.name}</h4>
        <p id="breweryDesc">{this.props.brewery.description}</p>
        <img id="breweryImg"src={this.props.brewery.image}/>
        </div>
        <div id="beerInfo">
        <ul>{beers}</ul>
        <BeerInfo beer={this.props.beer}/>
        </div>
      </div>
    );
  }

});

module.exports = BreweryInfo;