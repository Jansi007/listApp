import React, { Component } from 'react';
import './App.css';
import TopBar from '../TopBar/TopBar'
import List from '../List/List'

class App extends Component {
	constructor(){
		super();
		this.state = {
			listName: 'shopping-list',
      display: '',
      color: "teal"
		}
	}

	componentDidMount(){
		this.setState({display: <List name={this.state.listName} color="teal" />})
	}

  render() {
    return (
      <div>
      	<TopBar name={this.state.listName} color={this.state.color} />
    		{this.state.display}
      </div>
    );
  }
}

export default App;
