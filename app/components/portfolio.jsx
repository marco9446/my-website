var React = require('react');
var Modal = require('react-modal');
var projectsJson = require('json!../projects.json');

var Portfolio = React.createClass({
  getInitialState: function() {
    return { modalIsOpen: false,
        actualPr: {}
      };
  },

  openModal: function(proj) {
    this.setState({modalIsOpen: true, actualPr: proj});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    // to add new projects modyfy projects.
    var style = {
        overlay : {
          zIndex            : 50,
          backgroundColor   : 'rgba(0, 0, 0, 0.40)'
        },
        content : {
          position                   : 'absolute',
          top                        : '50%',
          left                       : '50%',
          maxWidth                   : '600px',
          minHeight                  : '80%',
          bottom                     : '60px',
          transform                  : 'translate(-50%, -50%)'
        }
      }
      if (window.matchMedia("(max-width: 600px)").matches) {
        style.content ={
            top                        : '0',
            left                       : '0',
            right                      : '0',
            bottom                     : '0',
            minHeight                  : '100%'
          }
      }

    var renderPr = [];
    for (var i = 0; i < projectsJson.length; i++) {
      renderPr.push(
        <div className='project' key={i} onClick={this.openModal.bind(this,projectsJson[i])}>
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

        <Modal
          className="dialog"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={style}>
          <span  className="close-thik" onClick={this.closeModal}></span>
          <h1>{this.state.actualPr.title}</h1>
          <img src={this.state.actualPr.image}></img>
          <p>{this.state.actualPr.description}</p>
        </Modal>

      </section>
    );
  }

});

module.exports = Portfolio;
