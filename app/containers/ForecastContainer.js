var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/weather');

var ForecastContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true,
      forecastData: {}
    }
  },

  componentDidMount: function(){
    weatherHelpers.getCityForecast(this.props.routeParams.city)
    .then(function(results){
      this.setState({
        isLoading: false,
        forecastData: results
      })
    }.bind(this))
    // console.log(this.state)

  },

  componentWillUnmount: function () {
    window.clearInterval(this.interval)
  },

  render: function() {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData}
      />
      )
  }
});

module.exports = ForecastContainer;