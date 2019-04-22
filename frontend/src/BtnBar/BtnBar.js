import React from 'react'
import AddBtn from '../Btns/AddBtn/AddBtn'
import MenuBtn from '../Btns/MenuBtn/MenuBtn'


const BtnBar = (props) => {
	return(
		<div id="barCon">
			<div id="bar" >
				<MenuBtn type="menu" size="2em" />
				<div id="divider"></div>
				<AddBtn type="add" size="2em" addItem={props.addItem} />
			</div>
		</div>
	);
}

export default BtnBar