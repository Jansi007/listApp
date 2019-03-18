import React, {Component} from 'react';
import './List.css';
import ItemList from '../ItemList/ItemList';
import TopBar from '../TopBar/TopBar';

class List extends Component{
	render(){
		return(
			<div id="shoppingList">
				<ItemList listName={this.props.name} />
			</div>
			);
	}
}

export default List;