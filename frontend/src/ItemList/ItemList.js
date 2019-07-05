import React, {Component} from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import BtnBar from '../BtnBar/BtnBar'
import TextBox from '../TextBox/TextBox'
import InnerBar from '../InnerBar/InnerBar'

class ItemList extends Component{

	constructor(props){		
		super(props);
		this.state = {
			itemsInList: [],
			addItem: false,
			textBox: undefined,
			textBoxValue: '',
			innerBarContent: <InnerBar openMenu={this.props.openMenu} addItem={this.addItem} />
		}
	}

	addItem = () =>{
		const mem = this.state.textBoxValue
		const {listName} = this.props

		if(this.state.addItem === false){
			this.setState({ innerBarContent: <TextBox onTextChange={this.onTextChange} addItem={this.addItem} closeAddItem={this.closeAddItem} />})
			this.setState({ addItem: true})
		}
		else{
		this.setState({ innerBarContent: <InnerBar addItem={this.addItem} openMenu={this.props.openMenu} />})
			fetch('http://192.168.178.40:2000/addItem/', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				list: listName,
				item: mem
			})
		}).then(this.updateList)
		this.setState({ textBox: undefined, textBoxValue: undefined, addItem: false })
		}
	}

	closeAddItem = () =>{
		this.setState({ textBox: undefined, textBoxValue: undefined, addItem: false, innerBarContent: <InnerBar addItem={this.addItem} openMenu={this.props.openMenu} /> })
	}

	delItem = (item) =>{
		const {listName} = this.props

		fetch('http://192.168.178.40:2000/delItem/', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				list: listName,
				item: item
			})
		}).then(this.updateList)
	}

	updateList = () =>{
		const {listName} = this.props

		fetch('http://192.168.178.40:2000/getList/', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				list: listName
			})
		})
		 .then(data => data.json())
		 .then(data => {
			 	const arr = []
			 	data.map(item => {
			 		return arr.push({name: item.name, isChecked: item.isChecked})
		 	})
		 	this.setState({ itemsInList: arr.map((item, i) => {return <Item inner={item.name} key={i} id={i} delItem={this.delItem} isChecked={item.isChecked} checkItem={this.checkItem} color={this.props.color} />}) })
		 })
	}

	componentDidMount(){	
		this.updateList()	

		document.addEventListener('keypress',event =>{
			if(event.keyCode === 13 && this.state.addItem === true){
				this.addItem()
			}
		})
	}

	onTextChange = (event) =>{
		this.setState({textBoxValue: event.target.value})
	}

	checkItem = (itemName, checkState) => {
		const {listName} = this.props

		fetch('http://192.168.178.40:2000/checkItem/', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				list: listName,
				name: itemName,
				checkState: checkState

			})
		}).then(this.updateList)
	}

	render(){
		return(
				<div id="baseItemList">
					<div id="wrapper">
						<div id="itemContainer">
							{this.state.itemsInList}
						</div>
						<div id="addWrapper">
							{this.state.textBox}
							<BtnBar innerBarContent={this.state.innerBarContent} id="btnBar" />						
						</div>
					</div>
				</div>
			);
	}
}

export default ItemList;