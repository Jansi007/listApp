import React, {Component} from 'react';
import './CheckBtn.css';

class CheckBtn extends Component{

	componentDidMount(){
			const check = document.getElementById(this.props.id);
			let stateCheck = false

			check.addEventListener('click', (event) =>{
				if(stateCheck){
					stateCheck = false;
					check.style = "background-color: none;"
				}
				else{
					stateCheck = true;
					check.style = "background-color: #40bf40;"
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