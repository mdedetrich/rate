// use jsx to render html, do not modify simple.html
import Rate from 'rc-rate';
import React from 'react';
import ReactDOM from 'react-dom';

const options = {
  'disableHover': false,
  'useHover': true, 
};

ReactDOM.render(<Rate {...options}/>, document.getElementById('__react-content'));