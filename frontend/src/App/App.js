import React, { Component } from 'react';
import './App.css';
import List from '../List/List'

class App extends Component {
	constructor(){
		super();
		this.state = {
			listName: 'shopping-list',
      display: ''
		}
	}

  render() {
    return (
      <div id="baseApp">
    	<List name={this.state.listName} color="teal" />
      </div>
    );
  }
}

export default App;
