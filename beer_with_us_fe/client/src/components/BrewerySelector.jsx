var React = require('react');

var BrewereySelector = React.createClass({

  getInitialState: function() {
    return {
      beers:[] 
    };
  },


  setBrewery: function(e){
    this.props.brewery(e.target.value)
    this.props.load("http://localhost:3000/api/breweries/" + e.target.value + "/beers")
    console.log("http://localhost:3000/api/breweries/" + e.target.value + "/beers");
  },

  render: function() {
    var breweries = this.props.data.map(function(info){
      return <option value={info.id}  key={info.name}>{info.name}</option>
    })

    return (
      <div id="formDiv">
      <form>
        <select onChange={this.setBrewery}>
          <option>Select A Brewerey</option>  
          {breweries}
        </select>
      </form>
      </div>
    );
  }

});

module.exports = BrewereySelector;