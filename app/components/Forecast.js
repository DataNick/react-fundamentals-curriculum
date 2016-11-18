var React = require('react');
var Loading = require('../components/Loading');

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

function Forecast(props) {
  if (props.isLoading === true) {
    return <Loading speed={800} text={'Waiting'} style={styles.container} />
  } else {
    return (
      <div style={styles.container}>Forecast component</div>
      )
  }
}

module.exports = Forecast;