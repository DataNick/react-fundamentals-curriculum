var React = require('react');
var PropTypes = React.PropTypes;
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
  container: {
    backgroundImage: "url('app/images/pattern.svg')",
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

function Home(props){
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Enter a City and State</h1>
      <GetCityContainer />
    </div>
  )
}


module.exports = Home;

