import React, {Component} from 'react';
import './CheckBtn.css';

class CheckBtn extends Component{
	componentDidMount(){
		const {isChecked, id} = this.props
		const check = document.getElementById(id);

		if(isChecked){
			check.style = "background-color: #40bf40; border-color: #40bf40;"
		}else{
			check.style = "background-color: none; border-color: #757575;"
		}
	}

	checkBtn = () => {
		const {checkItem, isChecked, id} = this.props
		const check = document.getElementById(id);

		if(isChecked){
			console.log(isChecked)
			checkItem(this.props.itemName, false)
			check.style = "background-color: #40bf40; border-color: #40bf40;"
		}else{
			console.log(isChecked)
			checkItem(this.props.itemName, true)
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