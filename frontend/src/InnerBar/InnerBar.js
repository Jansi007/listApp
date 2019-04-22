import React from 'react'
import './InnerBar.css'
import MenuBtn from '../Btns/MenuBtn/MenuBtn'
import AddBtn from '../Btns/AddBtn/AddBtn'

const InnerBar = (props) =>{
	return(
		<div id="bar" >
			<MenuBtn type="menu" size="2em" />
			<div id="divider"></div>
			<AddBtn type="add" size="2em" addItem={props.addItem} />
		</div>
	);
}

export default InnerBar