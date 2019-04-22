import React, {Component} from 'react';
import './TextBox.css';

class TextBox extends Component{
	componentDidMount(){
		const textBox = document.getElementById('textBox')
		textBox.style="width: 12em;"
	}

	render(){
		return(
			<div id="searchWrapper">
				<input type="textfield" id="textBox" autoFocus 	onChange={this.props.onTextChange} />
			</div>
			);
	}
}

export default TextBox;