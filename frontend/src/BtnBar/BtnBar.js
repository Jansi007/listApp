import React from 'react'
import Btn from '../Btns/Btn/Btn'
import MaterialIcon from 'material-icons-react'
import './BtnBar.css'

const BtnBar = () => {
	return(
		<div id="barCon">
			<div id="bar">
				<Btn type="menu" size="2em" />
				<Btn type="add" size="2em" />
			</div>
		</div>
	);
}

export default BtnBar