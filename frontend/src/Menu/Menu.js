import React, {Component} from 'react'
import './Menu.css'
import AddBtn from '../Btns/AddBtn/AddBtn'

class Menu extends Component{
	getLists = () =>{
		
	}

	render(){
		return(
			<div id="menuContainer">

				<div class="singleAddBtnContainer">
					<AddBtn class="singleAddBtn" />
				</div>

			</div>
			);
	}
}

export default Menu