var React = require('react'),
  About = require('./about.jsx');

var sectionEntry = React.createClass({

  render: function() {
    return (
      <div>
        <About></About>
      </div>
    );
  }

});

module.exports = sectionEntry;
