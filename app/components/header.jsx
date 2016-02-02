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
  scroll: function(){
    this.props.scrollIntoView(React.findDOMNode(this));


  },

  render: function() {
    var linksClass = 'links';
    if (this.state.open) {
      linksClass += ' is-open';
    }
    else {
      linksClass += ' is-closed'
    }

    return (
      <div className='container'>

        <ul className={linksClass} onClick={this.toggle}>
          <li><a href='#' onClick={this.scroll}>About</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#contacts'>Contacts</a></li>
        </ul>
        <h1  className='logo '>MR</h1>


        <div className='toggle' onClick={this.toggle}>
          <span></span>
        </div>
      </div>
    );
  }

});

module.exports = Header;
