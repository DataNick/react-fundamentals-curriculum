var React = require('react');

var styles = {
  container: {
    background: 'url(app/images/pattern.svg)',
    height: '587px'
  }
};

var Home = React.createClass({
  render: function(){
    return (
      <div style={styles.container}>
        <form>
          <div className="form-group">
            <input className="form-control" placeholder="Form object" type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-block btn-success" type="submit">
              Button
            </button>
          </div>
        </form>
      </div>
      )
  }
});

module.exports = Home;