import React from 'react'
import './AddBtn.css'

const AddBtn = (props) => {
	return(
			<div id="addBtnCon" onClick={() => props.function()} >
				<div className="line addBtnLine" id="addLine1" ></div>
				<div className="line  addBtnLine" id="addLine2" ></div>
			</div>
		);
}

export default AddBtn