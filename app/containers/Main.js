var React = require('react');
// var GetCityContainer = require('./GetCityContainer');

var styles = {
  container: {
  backgroundColor: 'tomato'

},
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    paddingBottom: '8px',
    paddingLeft: '5px'

},
  title: {
    margin: '0'
  }
}

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container" style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Weather App</h1>
        </header>
        {this.props.children}
      </div>
      )
  }
});

module.exports = Main;