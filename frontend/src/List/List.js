import React, {Component} from 'react';
import './List.css';
import ItemList from '../ItemList/ItemList';
import TopBar from '../TopBar/TopBar';

class List extends Component{
	render(){
		return(
			<div id="List">
				<TopBar name={this.props.name} color={this.props.color} />
				<ItemList listName={this.props.name} color={this.props.color} />
			</div>
			);
	}
}

export default List;