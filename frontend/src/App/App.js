import React, { Component } from 'react';
import './App.css';
import TopBar from '../TopBar/TopBar'
import List from '../List/List'

class App extends Component {
	constructor(){
		super();
		this.state = {
			listName: 'shopping-list',
      display: ''
		}
	}

	componentDidMount(){
		this.setState({display: <List name={this.state.listName} color="teal" />})
	}

  render() {
    return (
      <div id="baseApp">
      	<TopBar name={this.state.listName} />
    		{this.state.display}
      </div>
    );
  }
}

export default App;
