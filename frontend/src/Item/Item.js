import React, {Component} from 'react';
import './Item.css';
import CheckBtn from '../CheckBtn/CheckBtn';
import ReactSwipeEvents from 'react-swipe-events'

class Item extends Component{
	constructor(){
		super();
		this.state = {
			deleteBtn: false
		}
	}

	componentDidMount(){
		if(this.props.id === 0){
			this.refs.itemCon.style = "border: 0;"
		}
	}

	showItemDelete = (event, oX, oY, eX, eY, dX, dY) =>{
		const btn = this.refs.itemDelete
		
		if(dY < 30 && dY > -30 && dX < -50){
			btn.style = "width: 3em"
			btn.children[0].style = "opacity: 1"

		}
	}

	hideItemDelete = () =>{
		const btn = this.refs.itemDelete

		btn.style = "width: 0;"
		btn.children[0].style = "opacity: 0;"
	}

	render(){
		return(
			<div id="itemCon" ref="itemCon">
				<ReactSwipeEvents  onSwiped={(event, oX, oY, eX, eY, dX, dY) => this.showItemDelete(event, oX, oY, eX, eY, dX, dY)} >
					<div id="inner">
						<CheckBtn id={this.props.id} isChecked={this.props.isChecked} checkItem={this.props.checkItem} itemName={this.props.inner} color={this.props.color} />
						<div className="itemData" >
							<ReactSwipeEvents onSwiped={(event, oX, oY, eX, eY, dX, dY) => this.showItemDelete(event, oX, oY, eX, eY, dX, dY)} onSwipedRight={() => this.hideItemDelete()} > 
								<p className="text" onClick={() => this.setState({ deleteBtn: true })} >{this.props.inner}</p>
							</ReactSwipeEvents>
							<div className="deleteItem" ref="itemDelete" onClick={() => {this.props.delItem(this.props.inner); this.refs.itemDelete.style = "width: 0; transition: 0ms;"; this.refs.itemDelete.children[0].style = "opacity: 0;"}} >
								<p className="itemDeleteText">Delete</p>
							</div>
						</div>
					</div>
				</ReactSwipeEvents>
			</div>
		);
	}
}

export default Item;