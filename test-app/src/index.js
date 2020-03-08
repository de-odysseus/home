import React from 'react'; // react library, creates react element
import ReactDOM from 'react-dom'; // reactDOM works between react elements and the DOM, use it to render app
import './index.css';
import App from './components/app/'; // app component
import * as serviceWorker from './serviceWorker'; // let the app load faster in subsequent visits

// const getCurrentDate = () => {
//     const date = new Date();
//     return date.toDateString();
// }

// const greeting = React.createElement('h1', {}, 'Hello World'); // takes up to 3 arguments 1) tag we want to use; 2) the props you want to provide to your element
// 3) the string that we want to use within the tag;
// or we can use jsx like the next line of code

// const greeting = <h1>Hello! Current date: {getCurrentDate()}</h1>;

// ReactDOM.render(greeting, document.getElementById('root')); // takes two arguments, 1.) react element we want to render; 
// 2.) dom container that we want to render our react argument (the root element is in the public folder index.html); 
// 3.) optional: provide a callback function to store logic

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
