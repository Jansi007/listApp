import React from 'react'
import AddBtn from '../AddBtn/AddBtn'
import MaterialIcon from 'material-icons-react'
import './BtnBar.css'

const BtnBar = () => {
	return(
		<div id="barCon">
			<div id="bar">
				<div id="menuBtn">
					<MaterialIcon icon="menu" size={35} id="addIcon" />
				</div>
				<AddBtn />
			</div>
		</div>
	);
}

export default BtnBar