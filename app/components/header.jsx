var React = require('react'),
  classNames = require('classnames');


var Header = React.createClass({
  getInitialState: function() {
    return {open: false};
  },
  toggle: function(){
    if (this.state.open) {
      this.setState({open: false});
    }else {
      this.setState({open: true});
    }
  },
  render: function() {
    var linksClass = 'links';
    var containerClass = 'container';
    var containerClass = 'container';
    if (this.state.open) {
      linksClass,containerClass += ' is-open';
    }
    else {
      linksClass += ' is-closed'
    }

    return (
      <div className={containerClass}>

        <ul className={linksClass} onClick={this.toggle}>
          <li><a href='#about'>About</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#contacts'>Contacts</a></li>
        </ul>
        <div className='logo'>MR</div>
        <div className='toggle' onClick={this.toggle}>
          <span></span>
        </div>
      </div>
    );
  }

});

module.exports = Header;
