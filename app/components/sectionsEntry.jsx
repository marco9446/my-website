var React = require('react'),
  Contacts = require('./contacts.jsx'),
  Portfolio = require('./portfolio.jsx'),
  About = require('./about.jsx');

var sectionEntry = React.createClass({

  render: function() {
    return (
      <div>
        <About></About>
        <Portfolio></Portfolio>
        <Contacts></Contacts>
      </div>
    );
  }

});

module.exports = sectionEntry;
