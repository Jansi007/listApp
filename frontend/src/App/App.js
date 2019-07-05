import React, { Component } from 'react';
import './App.css';
import List from '../List/List'
import Menu from '../Menu/Menu'



class App extends Component {
	constructor(){
		super();
		this.state = {
			listName: undefined,
      display: undefined,
      isMenuActive: true,
      openListAllowed: true
		}
	}

	componentDidMount(){
		 this.setState({display: <Menu openList={this.openList} toggleOpenListAllowed={this.toggleOpenListAllowed} />, isMenuActive: true})
	}

	openList = (listName, color) =>{
		if(this.state.openListAllowed){
			this.setState({listName: listName, isMenuActive: false, display: <List listName={listName} color={color} openMenu={this.openMenu} />})
		}
	}

	toggleOpenListAllowed = (toggle) =>{
		this.setState({ openListAllowed: toggle })
	}

	openMenu = () => {
		this.setState({listName: undefined, isMenuActive: true, display:<Menu openList={this.openList} toggleOpenListAllowed={this.toggleOpenListAllowed} />})
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
