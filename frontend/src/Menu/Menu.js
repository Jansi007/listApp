import React, {Component} from 'react'
import './Menu.css'
import AddBtn from '../Btns/AddBtn/AddBtn'
import ListDisplayItem from '../ListDisplayItem/ListDisplayItem'
import AddListMenu from '../AddListMenu/AddListMenu'


class Menu extends Component{
	constructor(){
		super();
		this.state = {
			displayLists: undefined,
			addListMenu: <div id="menuAddBtn"><AddBtn id="menuAdd" function={this.addList} /></div>
		}
	}

	componentDidMount() {
		this.updateList()
	}

	updateList = () =>{
		fetch('http://192.168.178.93:2000/getAllLists/', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({

			})
		}).then(data => data.json())
			.then(data => data.sort((a, b) => (a.id > b.id) ? 1 : -1))
			.then(data => {
				this.setState({displayLists: data.map((item, i) => <ListDisplayItem name={item.name} color={item.color} openList={this.props.openList} delList={this.delList} id={i} key={i} toggleOpenListAllowed={this.props.toggleOpenListAllowed} />)})
			})
	}

	addList = () =>{
		this.setState({addListMenu: <AddListMenu resetAddList={this.resetAddList} getInputField={this.getInputField} updateList={this.updateList} />})
		
	}

	resetAddList = () =>{
		this.setState({addListMenu: <div id="menuAddBtn"><AddBtn id="menuAdd" function={this.addList} /></div>, newListName: ''})
	}

	delList = (listName) =>{
			fetch('http://192.168.178.93:2000/delList/', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: listName
			})
		}).then(setTimeout(()=>{this.updateList()}, 1000))
	}

	render(){
		return(
			<div id="menuContainer">
				<div id="menuListContainer">
					{this.state.displayLists}
				</div>
				<div id="addListContainer">
					{this.state.addListMenu}
				</div>
			</div>
			);
	}
}

export default Menu