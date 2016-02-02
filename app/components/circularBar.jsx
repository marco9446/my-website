var React = require('react');

var Circular = React.createClass({

  render: function() {
    const defRadious = 50;
    const radius = defRadious - this.props.strokeWidth / 2;
    const width = defRadious * 2;
    const height = defRadious * 2;
    const viewBox = `0 0 ${width} ${height}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;

    return (
      <div className='circular'>
        <svg
           className="CircularProgress"
           viewBox={viewBox}>
           <circle
               className="CircularProgress-Bg"
               cx={defRadious}
               cy={defRadious}
               r={radius}
               strokeWidth={`${this.props.strokeWidth}px`} />
           <circle
               className="CircularProgress-Fg"
               cx={defRadious}
               cy={defRadious}
               r={radius}
               strokeWidth={`${this.props.strokeWidth}px`}
               style={{
                   strokeDasharray: dashArray,
                   strokeDashoffset: dashOffset
               }} />
           <text
               className="CircularProgress-Text"
               x={defRadious}
               y={defRadious}
               dy=".4em"
               textAnchor="middle">
               {`${this.props.percentage}%`}
           </text>
        </svg>
        <div className='skillText'>{this.props.text}</div>
      </div>
    );
  }

});

module.exports = Circular;
