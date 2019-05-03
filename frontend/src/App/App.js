import React, { Component } from 'react';
import './App.css';
import List from '../List/List'
import Menu from '../Menu/Menu'


class App extends Component {
	constructor(){
		super();
		this.state = {
			listName: 'test',
      display: '',
      color: '#0099ff',
      isMenuActive: true,
      listTag: undefined,
      test: console.log()
		}
	}

	componentDidMount(){
		const {listName, color, isMenuActive} = this.state
		const listTag = <List name={listName} color={color} />

		this.setState({display: listTag, listTag: listTag})

		if(isMenuActive){
			this.setState({display: <Menu />, isMenuActive: true})
		}else{
			this.setState({display: listTag, isMenuActive: false})
		}
	}
	
	toggleMenu = () => {
		const {isMenuActive, listTag} = this.state

		if(isMenuActive){
			this.setState({display: listTag, isMenuActive: false})
		}else{
			this.setState({display: <Menu />, isMenuActive: true})
		}
	}

  render() {
  	console.log(this.state.display)
    return (
      <div id="app">
    		{this.state.display}
      </div>
    );
  }
}

export default App;
