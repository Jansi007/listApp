import React, {Component} from 'react'
import './BtnBar.css'


class BtnBar extends Component{
	render(){
		return(
			<div id="barCon">
				{this.props.innerBarContent}
			</div>
		);
	}
}

export default BtnBar