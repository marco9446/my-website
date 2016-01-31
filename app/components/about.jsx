var React = require('react'),
  Terminal = require('./terminal.jsx');

var About = React.createClass({

  render: function() {
    return (
      <section  id='about'>
        <div className='wrapper'>
          <h1>ABOUT</h1>
          <div className='helper'>
            <div className='screen'>
              <div className='innerScreen'>

                <div className='terminalWindow'>
                  <div className='icons'>
                    <div className='threeIcn red'></div>
                    <div className='threeIcn yellow'></div>
                    <div className='threeIcn green'></div>
                  </div>

                  <Terminal></Terminal>


                </div>

              </div>
            </div>
            <div className='base'>
              <div className='hole'></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

});

module.exports = About;
