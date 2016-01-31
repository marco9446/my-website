var React = require('react');

var Termianl = React.createClass({
  getInitialState: function(){
    return {
      placeholder:"i'm interactive, try to type some basic unix commands",
      position:'~',
      history: [
        {command: 'Marco.profession', result:'students in computer science and developer'},
        {command: 'Marco.hobbies', result:"[ 'MTB', 'experiment new technologies', 'music' ]"}
      ]
    }
  },


  _parceInput: function (e) {
    if (e.key === 'Enter') {
      var value = e.target.value.split(' ');
      for(var i = value.length; i--;) {
          if(value[i] === '') {
              value.splice(i, 1);
          }
      }
      this._executeCommand(value);
      e.target.value = '';
    }
  },

  _executeCommand: function(command) {
    var entireCom = command.length >1? command[0]+' '+command[1] :command[0] ;
    switch (command[0]) {
      case 'cd':
        this.setState({position: command[1]})
        break;
      case undefined :
        break;
      default:
        this._addCommand(entireCom,'command not found');
    }
  },

  _addCommand: function(comm, res) {
    var arr = this.state.history;
    arr.push({command: comm, result: res});
    this.setState({history: arr});

  },

  _writeCommand: function() {
    var commands = [];
    var commandsHystory = this.state.history;
    for (var i = 0; i < commandsHystory.length; i++) {
      commands.push(
        <div className='commandContainer' key={i}>
          <div className='.title'>
            > {commandsHystory[i].command}
          </div>
          <div className='result'>
            => {commandsHystory[i].result}
          </div>
        </div>
      )
    }
    return commands;
  },
  componentDidUpdate: function () {
    var element = document.getElementById("history");
    element.scrollTop = element.scrollHeight;
  },


  render: function() {
    var commands = this._writeCommand();

    return (
      <div className='commands'>
        <div className='history' id='history'>
            {commands}
        </div>
        <div className='input-container'>
          {this.state.position}
          <input type='text' id=''
              onKeyPress = {this._parceInput}
              placeholder={this.state.placeholder}/>
        </div>
      </div>
    );
  }

});

module.exports = Termianl;
