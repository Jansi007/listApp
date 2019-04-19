import React, {Component} from 'react';
import './Item.css';
import CheckBtn from '../CheckBtn/CheckBtn';

class Item extends Component{

	render(){
		return(
				<div id="inner">
					<p onClick={() => this.props.delItem(this.props.inner)} >{this.props.inner}</p>
					<CheckBtn id={this.props.id} />
				</div>
			);
	}
}

export default Item;