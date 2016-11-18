var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  container: {
    background: 'white',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '94vh'
  },
  form: {

  },
  button: {

  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100
  }
};


var Loading = React.createClass({
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number,
  },

  getDefaultProps: function () {
    return {
      text: 'Loading',
      speed: 300
    }
  },

  getInitialState: function(){
    this.originalText = this.props.text;
    return {
      text: this.originalText
    }
  },

  componentDidMount: function(){
    console.log(this.props)
    console.log(this.state)
    var stopper = this.originalText + '...'
    this.interval = setInterval(function(){
      if (this.state.text === stopper ) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), this.props.speed);
  },

  componentWillUnmount: function () {
    window.clearInterval(this.interval)
  },

  render: function() {
    return (
      <div style={styles.container}>{this.state.text}</div>
      )
  }
});

module.exports = Loading;







