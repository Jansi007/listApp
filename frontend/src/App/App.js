import React, { Component } from 'react';
import './App.css';
import List from '../List/List'

class App extends Component {
  render() {
    return (
      <div id="baseApp">
    	<List name="Shopping List" color="teal" />
      </div>
    );
  }
}

export default App;