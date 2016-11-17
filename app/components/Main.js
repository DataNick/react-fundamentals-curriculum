var React = require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <h1>Weather App</h1>
        <ul>
          <li>Home</li>
          <li>Bio</li>
          <li>About</li>
        </ul>
        {this.props.children}
      </div>
      )
  }
});

module.exports = Main;