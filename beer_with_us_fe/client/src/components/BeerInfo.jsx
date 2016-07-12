var React = require('react');

var BeerInfo = React.createClass({

  render: function() {
    if (!this.props.beer) {
        return (
        <h4>Click on a Beer to display information</h4>
      );
    }

    return (
      <div>
        <h4>{this.props.beer.name}</h4>
        <p>AVB: {this.props.beer.avb}</p>
        <p>{this.props.beer.description}</p>
      </div>
    );

  }

});

module.exports = BeerInfo;