import React, {Component} from 'react';
import './CheckBtn.css';

class CheckBtn extends Component{

	componentDidMount(){
			const check = document.getElementById(this.props.id);
			let stateCheck = false

			check.addEventListener('click', (event) =>{
				if(stateCheck){
					stateCheck = false;
					check.style = "border: 2px solid #555555; background-color: none;"
				}
				else{
					stateCheck = true;
					check.style = "border: 2px solid teal; background-color: teal;"
				}
			})
		}

	render(){
		return(
			<div id={this.props.id} className="check" ></div>
			);
	}
}

export default CheckBtn;