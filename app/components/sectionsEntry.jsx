var React = require('react'),
  Contacts = require('./contacts.jsx'),
  Portfolio = require('./portfolio.jsx'),
  Skills =    require('./skills.jsx'),
  About = require('./about.jsx');

var sectionEntry = React.createClass({
  scrollIntoView: function(ref){

  },

  render: function() {
    return (
      <div>
        <About></About>
        <Portfolio></Portfolio>
        <Skills></Skills>
        <Contacts></Contacts>
      </div>
    );
  }

});

module.exports = sectionEntry;
