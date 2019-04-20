import React, {Component} from 'react';
import './Item.css';
import CheckBtn from '../CheckBtn/CheckBtn';

class Item extends Component{
	render(){
		return(
			<div id="itemCon">
				<div id="inner">
					<CheckBtn id={this.props.id} />
					<p className="text" onClick={() => this.props.delItem(this.props.inner)} >{this.props.inner}</p>
				</div>
				<div className="divider"></div>
			</div>
			);
	}
}

export default Item;