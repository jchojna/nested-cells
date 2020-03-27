import React, { Component } from 'react';
import '../scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1>Nested Cells</h1>
        </header>
        <main className="App__container">
          <h2 className="App__title">People</h2>
  
          {/* LIST OF DATA COMPONENTS */}
  
          {/* 'ADD' BUTTON COMPONENT */}
  
        </main>
      </div>
    );
  }
}

export default App;