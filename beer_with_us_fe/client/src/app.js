var React = require('react');
var ReactDOM = require('react-dom');

var ViewBox = require('./components/ViewBox.jsx')


window.onload = function(){
  ReactDOM.render(
    <ViewBox 
      url="http://localhost:3000/api/breweries"
    />,
    document.getElementById('app')
  );
}
