var React = require('react');
var GetCity = require('../components/GetCity');
var weatherHelpers = require('../utils/weather');

var GetCityContainer = React.createClass({
  getInitialState: function(){
    return {
      city: ''
    }
  },

  handleUpdateCity: function(e){
    this.setState({
      city: e.target.value
    });
  },

  handleSubmitCity: function(e){
    e.preventDefault();
    var city = this.state.city;
      this.setState({
      city: ''
    });
    weatherHelpers.getCityWeather(city)

  },

  componentDidMount: function(){

    console.log(this.props.location)
  },

  render: function(){
    return (
      <GetCity
            onSubmitCity={this.handleSubmitCity}
            onUpdateCity={this.handleUpdateCity}
            city={this.state.city}
      />
      )
  }
});

module.exports = GetCityContainer;
