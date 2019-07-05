import React, {Component} from 'react'
import './TextBox.css'
import letter_x from '../img/letter_x.svg'
import tick from '../img/tick.svg'

class TextBox extends Component{
	render(){
		return(
			<div id="searchWrapper">
				<div id="searchCon">
					<div id="letter_x_textBoxCon" onClick={() => this.props.closeAddItem()} >
						<img src={letter_x} alt="x" id="letter_x_addItem" />
					</div>
					<input type="textfield" id="textBox" autoFocus	onChange={this.props.onTextChange} />
					<div id="tick_textBoxCon"  onClick={() => this.props.addItem()} >
						<img src={tick} alt="tick" id="tick_addItem" />
					</div>
				</div>
			</div>
			);
	}
}

export default TextBox;