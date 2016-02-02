var React = require('react'),
  CircBar = require('./circularBar.jsx');

var Skills = React.createClass({

  render: function() {
    return (
      <section id='skills'>
        <div className='wrapper'>
          <h1>SKILLS</h1>
          <div className='circContainer'>
            <CircBar strokeWidth='5' percentage='90' text='Javacript'></CircBar>
            <CircBar strokeWidth='5' percentage='80' text='Java'></CircBar>
            <CircBar strokeWidth='5' percentage='70' text='Python'></CircBar>
            <CircBar strokeWidth='5' percentage='40' text='Android'></CircBar>
            <CircBar strokeWidth='5' percentage='40' text='C'></CircBar>
            <CircBar strokeWidth='5' percentage='40' text='C++'></CircBar>

          </div>
        </div>

      </section>
    );
  }

});

module.exports = Skills;
