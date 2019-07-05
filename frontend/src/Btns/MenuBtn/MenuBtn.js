import React from 'react'
import './MenuBtn.css'

const MenuBtn = (props) => {
	return(
			<div id="menuBtnCon" onClick={() => props.openMenu()} >
				<div className="line menuBtnLine"></div>
				<div className="line menuBtnLine"></div>
				<div className="line menuBtnLine" ></div>
			</div>
		);
}

export default MenuBtn