import React, {Component} from 'react';
import './TextBox.css';

class TextBox extends Component{

	render(){
		return(
			<div id="searchWrapper">
				<input type="textfield" id="textBox" placeholder="name" onChange={this.props.onTextChange} />
			</div>
			);
	}
}

export default TextBox;