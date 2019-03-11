import React, {Component} from 'react';
import './ItemList.css';
import MaterialIcon from 'material-icons-react';
import Item from '../Item/Item';
import items from '../items.js';
import TextBox from '../TextBox/TextBox';

class ItemList extends Component{

	constructor(){		
		super();
		this.state = {
			items: items,
			itemsInList: [],
			addItem: false,
			textBox: undefined,
			textBoxValue: ''

		}

	};

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
	};

	updateList = () =>{
		this.setState({ itemsInList: items.map((event, i) => {return <Item inner={items[i]} key={i} id={i} />}) })
	};

	componentDidMount(){
		this.updateList()	

		document.addEventListener('keypress', (event) => {
			if(event.keyCode === 13 && this.state.addItem === true){
				this.addItem()
			}
		})
	};

	onTextChange = (event) =>{
		this.setState({textBoxValue: event.target.value})
	};

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