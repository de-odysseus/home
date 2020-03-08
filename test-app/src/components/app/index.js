import React, { Component } from 'react';
import Intro from '../intro'
import './App.css';

class App extends Component {
  
  state = {
    series: []
  }

  componentDidMount() {
    const series = ["vikings,", "game of thrones"];

    setTimeout(() => {
      // this.setState({series: series}); // setState tells react that this component and its children need to be re-rendered with updated state
      this.setState({series}) // can also be written this way
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Tv Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series." />
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
