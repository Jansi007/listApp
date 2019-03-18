import React, {Component} from 'react';
import MenuBtn from '../MenuBtn/MenuBtn'
import './TopBar.css';

class TopBar extends Component{
	render(){
		return(
			<div id="topBase">
					<MenuBtn /> 
					<div className="centerFlex">
						<h1 id="heading">{this.props.name}</h1>
					</div>
			</div>
			);
	}
}

export default TopBar;