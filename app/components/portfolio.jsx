var React = require('react');
var projectsJson = require('json!../projects.json');

var Portfolio = React.createClass({


  render: function() {
    // to add new projects modyfy projects.json
    var renderPr = [];
    for (var i = 0; i < projectsJson.length; i++) {
      renderPr.push(
        <div className='project' key={i}>
          <h2>{projectsJson[i].title}</h2>
          <div className='overlayContainer'>
            <div className='overlay'>
              <img src="../images/loupe19.svg"></img>
            </div>
            <img src={projectsJson[i].image}></img>
          </div>
        </div>
      )
    }
    return (
      <section id='portfolio'>
        <div className='wrapper'>
          <h1>PORTFOLIO</h1>
          <div className='projects'>
            {renderPr}
          </div>

        </div>
      </section>
    );
  }

});

module.exports = Portfolio;
