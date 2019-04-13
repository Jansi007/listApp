import React, {Component} from 'react'
import './AddBtn.css'
import MaterialIcon from 'material-icons-react'

class AddBtn extends Component{
	render(){
		return(
			<div className="addBtn">
				<MaterialIcon icon="add" size={35} id="addIcon" />
			</div>
		);
	}
}

export default AddBtn