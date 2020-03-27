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
  
          {/* APP LOGO */}
  
          <h1 className="App__heading">Recruitment Task</h1>
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