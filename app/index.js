var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

// var app = document.getElementById('app');
// app.innerHTML = 'Hello';

// var Hello = React.createClass({
//   render: function () {
//     return(
//       <div>
//         <h1>Hello World</h1>
//         {this.props.children}
//       </div>
//       )
//   }
// });

ReactDOM.render (
  routes,
  document.getElementById('app')

  )
