import React, {Component} from 'react'
import './Btn.css'
import MaterialIcon from 'material-icons-react'

class Btn extends Component{
	render(){
		return(
			<div className="btn">
				<MaterialIcon icon={this.props.type} id="icon" />
			</div>
		);
	}
}

export default Btn