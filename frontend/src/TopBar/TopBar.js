import React, {Component} from 'react';
import './TopBar.css';

class TopBar extends Component{
	componentDidMount(){
		const header = document.getElementById('heading')
		const bgcolor = this.props.color
		
		header.style = `background-color: ${bgcolor} `
		console.log(header.style.backgroundColor)
	}

	render(){
		return(
			<div id="topBase">
					<div className="centerFlex">
						<h1 id="heading">{this.props.name}</h1>
					</div>
			</div>
			);
	}
}

export default TopBar;