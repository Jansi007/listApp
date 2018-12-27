import React, {Component} from 'react';
import './List.css';
import ItemList from '../ItemList/ItemList';
import TopBar from '../TopBar/TopBar';

class List extends Component{
	render(){
		return(
			<div id="shoppingList">
				<TopBar name={this.props.name} />
				<ItemList />
			</div>
			);
	}
}

export default List;