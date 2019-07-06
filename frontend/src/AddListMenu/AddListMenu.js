import React, {Component} from 'react'
import './AddListMenu.css'
import right_arrow from '../img/right_arrow.svg'
import letter_x from '../img/letter_x.svg'
import ColorPick from '../ColorPick/ColorPick'
import NewListSettings from '../NewListSettings/NewListSettings'

class AddListMenu extends Component{
	constructor(props){
		super(props);
		this.state = {
			innerAddContainer: <input type="text" className="addListMenuInput" placeholder="Name der neuen Liste" onChange={(event) => this.getInputField(event)} autoFocus />,
			addState: 0,
			newListName: '',
			color: '',
			newListSetting: 'off'
		}
	}

	createNewList = () =>{
		const { newListName, color, newListSetting } = this.state
		let renew = false
		let hr = 0

		if(newListSetting === 'off'){
			renew = false
			hr = 0
		}else if(newListSetting === 'daily'){
			renew = true
			hr = 1
		}else if(newListSetting === 'weekly'){
			renew = true
			hr = 2
		}

		fetch('http://192.168.178.93:2000/addList/', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: newListName,
				renew: renew,
				hr: hr,
				color: color
			})
		}).then(setTimeout(()=>{this.props.updateList()}, 100))
	}

	resetNewList = () =>{
		this.setState({ addState: 0, 
										innerAddContainer: <input type="text" className="addListMenuInput" placeholder="Name der neuen Liste" onChange={(event) => this.getInputField(event)} autoFocus />,
										newListName: '',
										color: '',
										newListSetting: 'off',
									})
		this.props.resetAddList()
	}

	advanceAdd = () =>{
		const {addState} = this.state
		if(addState === 0 && this.state.newListName){
			this.setState({ innerAddContainer: <ColorPick getColor={this.getColor} />, addState: 2})
		}else if(addState === 1 && this.state.color){
			this.setState({ innerAddContainer: <NewListSettings getSelectField={this.getSelectField} />, addState: 2 })
		}else if(addState === 2 && this.state.newListSetting){
			this.createNewList()			
			this.resetNewList()
		}

	}

	getInputField = (event) => {
		this.setState({newListName: event.target.value})
	}

	getColor = (color) =>{
		this.setState({ color: color})
	}

	getSelectField = (event) =>{
		this.setState({ newListSetting: event.target.value })
	}

	render(){
		return(
				<div id="addListMenuContainer" ref="addListMenuContainer" >
					<div className="leftIconContainer" onClick={() => this.props.resetAddList()}><img src={letter_x} alt="x" className="letter_x" /></div>
					{this.state.innerAddContainer}
					<div className="rightArrowContainer" onClick={this.advanceAdd} ><img src={right_arrow} alt="right arrow" className="right_arrow" /></div>
				</div>
			);
	}
}

export default AddListMenu