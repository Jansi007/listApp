import React, {Component} from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import BtnBar from '../BtnBar/BtnBar'
import TextBox from '../TextBox/TextBox'
import InnerBar from '../InnerBar/InnerBar'

class ItemList extends Component{

	constructor(){		
		super();
		this.state = {
			itemsInList: [],
			addItem: false,
			textBox: undefined,
			textBoxValue: '',
			divider: undefined,
			innerBarContent: <InnerBar addItem={this.addItem} />,
		}
	}

	addItem = () =>{
		const mem = this.state.textBoxValue
		const {listName} = this.props

		if(this.state.addItem === false){
			this.setState({ innerBarContent: <TextBox onTextChange={this.onTextChange} />})
			this.setState({ addItem: true})
		}
		else{
		this.setState({ innerBarContent: <InnerBar addItem={this.addItem} />})
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
		 	this.setState({ itemsInList: arr.map((item, i) => {return <Item inner={item.name} key={i} id={i} delItem={this.delItem} isChecked={item.isChecked} checkItem={this.checkItem} />}) })
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

		fetch('http://192.168.178.40:2000/')
			.then(data => data.json())
			.then(data => console.log(data))
	}

	onTextChange = (event) =>{
		this.setState({textBoxValue: event.target.value})
	}

	checkItem = (itemName, checkState) => {
		const {listName} = this.props

		console.log('checkItem running!')

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

	// checkTextBox = () =>{
	// 	const {addItemState} = this.props
	// 	if(addItemState === true){
	// 		this.setState({ innerBar: <TextBox />})
	// 	}
	// 	else{
	// 		this.setState({ innerBar: <InnerBar />})
	// 	}
	// }

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
							<BtnBar innerBarContent={this.state.innerBarContent} id="btnBar" />						
						</div>
					</div>
				</div>
			);
	}
}

export default ItemList;