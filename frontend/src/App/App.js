import React, { Component } from 'react';
import './App.css';
import List from '../List/List'

class App extends Component {
	constructor(){
		super();
		this.state = {
			listName: 'test',
      display: '',
      color: "teal"
		}
	}

	componentDidMount(){
		this.setState({display: <List name={this.state.listName} color="teal" />})
	}

  render() {
    return (
      <div id="app">
    		{this.state.display}
      </div>
    );
  }
}

export default App;
