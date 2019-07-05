import React, {Component} from 'react';
import './List.css';
import ItemList from '../ItemList/ItemList';
import TopBar from '../TopBar/TopBar';

class List extends Component{
	render(){
		return(
			<div id="List">
				<TopBar name={this.props.listName} color={this.props.color} />
				<ItemList listName={this.props.listName} color={this.props.color} openMenu={this.props.openMenu} />
			</div>
			);
	}
}

export default List;