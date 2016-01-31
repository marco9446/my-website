var React = require('react');

var Contacts = React.createClass({
  
  render: function() {
    return (
      <section id='contacts'>
        <div className='wrapper'>
          <h1>CONTACTS</h1>
          <div className='links-Container'>
            <a href='https://plus.google.com/+marcoravazzini' className='contacts-link google'>
              <img src='../images/google1.svg'></img>
            </a>
            <a href='mailto:marco9446@gmail.com' className='contacts-link gmail'>
              <img src='../images/mail1.svg'></img>
            </a>
            <a href='https://github.com/marco9446' className='contacts-link git'>
              <img src='../images/github1.svg'></img>
            </a>
            <a href='https://www.linkedin.com/in/marco-ravazzini-996b7a113?trk=nav_responsive_tab_profile' className='contacts-link linkedin'>
              <img src='../images/linkedin1.svg'></img>
            </a>
          </div>
        </div>
      </section>
    );
  }

});

module.exports = Contacts;
