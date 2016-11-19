var React = require('react');
var GetCity = require('../components/GetCity');
var weatherHelpers = require('../utils/weather');

var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

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
    this.context.router.push('forecast/' + city)

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
