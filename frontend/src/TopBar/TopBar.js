import React, {Component} from 'react';
import './TopBar.css';

class TopBar extends Component{
	componentDidMount(){
		// const bgcolor = this.props.color
		// const divs = document.getElementsByTagName('div')
		// const lineLeft = divs[4]
		// const lineRight =divs[6]
	
		// lineLeft.style = `border-bottom-right-radius: 1em; border-top-right-radius: 1em; background-color: ${bgcolor} `
		// lineRight.style = `border-bottom-left-radius: 1em; border-top-left-radius: 1em; background-color: ${bgcolor} `
	}

	render(){
		return(
			<div id="topBase">
					<div className="topBarLine"></div>
					<div className="centerFlex">
						<h1 id="heading">{this.props.name}</h1>					
					</div>
					<div className="topBarLine"></div>
			</div>
			);
	}
}

export default TopBar;