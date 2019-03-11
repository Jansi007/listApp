import React, {Component} from 'react';
import './Item.css';
import CheckBtn from '../CheckBtn/CheckBtn';

class Item extends Component{

	render(){
		return(
				<div id="wrapper">
					<div id="wrapperItem">
						<div id="inner">
							<h6>{this.props.inner}</h6>
								<CheckBtn id={this.props.id} />
						</div>
						<div id="divider"></div>
					</div>
				</div>
			);
	}
}

export default Item;