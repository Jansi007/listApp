import React, {Component} from 'react';
import './TopBar.css';

class TopBar extends Component{
	componentDidMount(){
		
	}

	render(){
		return(
			<div id="topBase">
				<h1 id="heading">{this.props.name}</h1>
			</div>
			);
	}
}

export default TopBar;