import React, {Component} from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import './TopBar.css';

class TopBar extends Component{
	render(){
		return(
			<div id="topBase">
					<h1 id="heading">{this.props.name}</h1>
			</div>
			);
	}
}

export default TopBar;