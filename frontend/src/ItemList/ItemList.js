import React, {Component} from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import TextBox from '../TextBox/TextBox';
import BtnBar from '../BtnBar/BtnBar'

class ItemList extends Component{

	constructor(){		
		super();
		this.state = {
			itemsInList: [],
			addItem: false,
			textBox: undefined,
			textBoxValue: '',
			divider: undefined

		}
	}

	addItem = () =>{
		const mem = this.state.textBoxValue
		const {listName} = this.props

		if(this.state.addItem === false){
			this.setState({ textBox: <TextBox onTextChange={this.onTextChange} />})
			this.setState({ addItem: true})
		}
		else{
			fetch('http://localhost:5000/addItem/', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				list: listName,
				item: mem
			})
		}).then(this.updateList)
		this.setState({ textBox: undefined})
		this.setState({ addItem: false})
		}
	}

	delItem = (item) =>{
		const {listName} = this.props

		fetch('http://localhost:5000/delItem/', {
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

		fetch('http://localhost:5000/getList/', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				list: listName
			})
		})
		 .then(data => data.json())
		 .then(data => {
		 	const arr = []
		 	data.map(item => arr.push(item.name))
		 	this.setState({ itemsInList: arr.map((item, i) => {return <Item inner={item} key={i} id={i} delItem={this.delItem} />}) })
		 	if(arr){
		 		this.setState({ divider: <div id="divider" className="divider"></div>})
		 	}
		 })
	}

	componentDidMount(){	
		this.updateList()	

		document.addEventListener('keypress',event =>{
			if(event.keyCode === 13 && this.state.addItem === true){
				this.addItem()
			}
		})

		fetch('http://localhost:5000/')
			.then(data => data.json())
			.then(data => console.log(data))
	}

	onTextChange = (event) =>{
		this.setState({textBoxValue: event.target.value})
	}

	render(){
		return(
				<div id="baseItemList">
					<div id="wrapper">
						<div id="itemWrapper">
							{this.state.divider}
							{this.state.itemsInList}
						</div>
						<div id="addWrapper">
							{this.state.textBox}
							{/* <MaterialIcon icon="add_circle_outline" size={35} id="addIcon" onClick={this.addItem} /> */}
							<BtnBar addItem={this.addItem} id="btnBar" />						
						</div>
					</div>
				</div>
			);
	}
}

export default ItemList;