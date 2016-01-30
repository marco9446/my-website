var React = require('react'),
    ReactDOM = require('react-dom'),
    Sections = require('./sectionsEntry.jsx'),
    Header = require('./header.jsx');


const header = (<Header/>);
const sections = (<Sections/>);


ReactDOM.render(header, document.getElementById('header'));
ReactDOM.render(sections, document.getElementById('sections'));
