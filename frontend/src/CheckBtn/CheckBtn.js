import React, {Component} from 'react';
import './CheckBtn.css';

class CheckBtn extends Component{
	constructor(){
		super();
		this.state = {
			didRender: false
		}
	}

	componentDidMount(){
		const {isChecked, id, color} = this.props
		const {didRender} = this.state
		const check = document.getElementById(id);

		if(!didRender){
			if(isChecked){
				check.style = `background-color: ${color}; border-color: ${color};`
			}else{
				check.style = "background-color: none; border-color: #757575;"
			}
		}
	}

	checkBtn = () => {
		const {checkItem, isChecked, id, color} = this.props
		const check = document.getElementById(id)

		if(!isChecked){
			checkItem(this.props.itemName, true)
			check.style = `background-color: ${color}; border-color: ${color};`
		}else{
			checkItem(this.props.itemName, false)
			check.style = "background-color: none; border-color: #757575;"
		}
	}

render(){
	return(
		<div id={this.props.id} className="check" onClick={this.checkBtn} ></div>
		);
}
}

export default CheckBtn;