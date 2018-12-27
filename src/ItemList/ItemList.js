import React, {Component} from 'react';
import './ItemList.css';
import MaterialIcon from 'material-icons-react';
import Item from '../Item/Item';
import items from '../items.js';

class ItemList extends Component{

	constructor(){		
		const itemsInList = items.map((event, i) => {
			return <Item inner={items[i]} key={i} />
		})

		super();
		this.state = {
			items: items,
			itemsInList: itemsInList,
		}

	}

	render(){
		return(
				<div id="baseItemList">
					<div id="wrapper">
						<div id="itemWrapper">
							{this.state.itemsInList}
						</div>
						<MaterialIcon icon="add_circle_outline" size={35} id="addIcon" />
					</div>
				</div>
			);
	}
}

export default ItemList;