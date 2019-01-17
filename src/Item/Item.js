import React, {Component} from 'react';
import './Item.css';
import MaterialIcon from 'material-icons-react';
import CheckBtn from '../CheckBtn/CheckBtn';

class Item extends Component{

	componentDidMount(){
		
	}

	render(){
		return(
				<div id="wrapper">
					<div id="wrapperItem">
						<div id="inner">
							<h6>{this.props.inner}</h6>
							<div id="endWrapper">
								<MaterialIcon icon="clear" size={22} id="delIcon" onClick={this.props.delItem} />
								<CheckBtn id={this.props.id} />
							</div>
						</div>
						<div id="divider"></div>
					</div>
				</div>
			);
	}
}

export default Item;