var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  form: {
    width: '30%'
  },
  button: {
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100
  }
};

function GetCity(props){
  return(
    <form onSubmit={props.onSubmitCity} style={styles.form}>
      <div className="form-group">
        <input className="form-control" placeholder="Type city name" type="text" onChange={props.onUpdateCity} value={props.city} />
      </div>
      <div className="form-group col-sm-4 col-sm-offset-4">
        <button className="btn btn-block btn-success" style={styles.button} type="submit">
          Get Weather
        </button>
      </div>
    </form>
    )
}

GetCity.propTypes= {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = GetCity;