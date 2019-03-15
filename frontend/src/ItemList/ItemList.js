import React, {Component} from 'react';
import './ItemList.css';
import MaterialIcon from 'material-icons-react';
import items from '../items';
import Item from '../Item/Item';
import TextBox from '../TextBox/TextBox';

class ItemList extends Component{

	constructor(){		
		super();
		this.state = {
			items: undefined,
			itemsInList: [],
			addItem: false,
			textBox: undefined,
			textBoxValue: ''

		}
	}

	addItem = () =>{

		const mem = this.state.textBoxValue

		if(this.state.addItem === false){
			this.setState({ textBox: <TextBox onTextChange={this.onTextChange} />})
			this.setState({ addItem: true})
		}
		else{
			items.push(mem)
			this.updateList()
			this.setState({ textBox: undefined})
			this.setState({ addItem: false})
		}
	}

	updateList = () =>{
		const {items} = this.state
		this.setState({ itemsInList: items.map((event, i) => {return <Item inner={items[i]} key={i} id={i} />}) })
	}

	initList = () => {
		const {listName} = this.props

		fetch('http://localhost:5000/getList/', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				list: listName
			})
		})
		.then(data => data.json())
		.then(data => this.setState({items: data}))
	}

	componentDidMount(){	
		this.initList()
		this.updateList()	

		document.addEventListener('keypress', (event) => {
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
							{this.state.itemsInList}
						</div>
						<div id="addWrapper">
							{this.state.textBox}
							<MaterialIcon icon="add_circle_outline" size={35} id="addIcon" onClick={this.addItem} />							
						</div>
					</div>
				</div>
			);
	}
}

export default ItemList;