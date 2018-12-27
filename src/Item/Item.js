import React, {Component} from 'react';
import './Item.css';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import CheckBtn from '../CheckBtn/CheckBtn';

class Item extends Component{

	componentDidMount(){
		console.log(this.props.key)
	}

	render(){
		return(
				<div id="wrapper">
					<div id="wrapperItem">
						<div id="inner">
							<h6>{this.props.inner}</h6>
							<CheckBtn id={this.props.inner} />
						</div>
						<div id="divider"></div>
					</div>
				</div>
			);
	}
}

export default Item;