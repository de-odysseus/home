import React from 'react';

// functional component - javascript functions that return a react element or simple jsx
const Intro = (props) => (
    <p>
      {props.message}
    </p>
);

export default Intro;