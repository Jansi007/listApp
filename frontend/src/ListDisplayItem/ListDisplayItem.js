import React, {Component} from 'react'
import './ListDisplayItem.css'
import ReactSwipeEvents  from 'react-swipe-events'

class ListDisplayItem extends Component{
	showDelete = (event, oX, oY, eX, eY, dX, dY) =>{
		const item = event.target
		const deleteBtn = this.refs.deleteBtn

		if(item.className === 'ListDisplayContainer' && dY < 30 && dY > -30 && dX < -50){
			item.parentNode.style = "max-width: 70%; width: 70%;"
			deleteBtn.style = "max-width: 25%; width: 25%;"
			deleteBtn.children[0].style = "display: contents"

			this.props.toggleOpenListAllowed(false)
		}
	}

	hideDelete = (item) =>{
		const deleteBtn = this.refs.deleteBtn

		if(item.className === 'ListDisplayContainer'){
			item.parentNode.style = "min-width: 100%; width: 100%;"
			deleteBtn.style = "max-width: 0%; width: 0%;"
			deleteBtn.children[0].style = "display: none"

			this.props.toggleOpenListAllowed(true)
		}
	}

	onClickDelete = (event) =>{
		
		if(event.target.className === 'deleteBtn'){
			this.hideDelete(this.refs.swipeContainer)
			this.props.delList(this.props.name)
		}

		// this.hideDelete(event.target)
		// this.props.delList(this.props.name)
	}

	render(){
		return(
			<div className="ListDisplayItemWrapper">
				<div className="ListDisplayItemContainer">
					<ReactSwipeEvents ref="swipeEvent" className="swipeEvent" onSwiped={(event, oX, oY, eX, eY, dX, dY) => this.showDelete(event, oX, oY, eX, eY, dX, dY)} onSwipedRight={(event) => this.hideDelete(event.target)} >
						<div className="ListDisplayContainer"  ref='swipeContainer' onClick={() => this.props.openList(this.props.name, this.props.color)} >
							<div className="menuListColorIdentifier" ref="colorIndicator" style={{backgroundColor: this.props.color}} ></div>
							<div>
								<h3 className="menuListItemTitle">{this.props.name}</h3>
							</div>
						</div>
					</ReactSwipeEvents>
					<div className="deleteBtn" ref="deleteBtn" onClick={(event) => this.onClickDelete(event)} ><p className="deleteBtnText">Delete</p></div>
				</div>
			</div>
		);
	}
}

export default ListDisplayItem