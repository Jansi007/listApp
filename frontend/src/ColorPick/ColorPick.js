import React from 'react'
import './ColorPick.css'
import colorPool from '../colorPool.js'

class ColorPick extends React.Component{
	constructor(){
		super();

		this.state = { 
			colorTags: []
		}

		this.colorNodes = [];
	}

	componentDidMount(){
		this.initColorNodes()
	}

	initColorNodes = () =>{
		let colorTags = []

		colorPool.map((color, i) => colorTags.push(<span ref={(ref) => this.colorNodes[i] = ref} className="colorNode passiveColorNode" style={{backgroundColor: color}} key={i} onClick={(event) => this.onClickEvent(event, color)} ></span>))

		this.setState({ colorTags: colorTags})

		colorTags = []
	}

	onClickEvent = (event, color) =>{
		this.props.getColor(color)
		const {colorNodes} = this
		const node = event.target

		colorNodes.map(item => {
			item.classList.remove('activeColorNode')
			item.classList.add('passiveColorNode')
			return item
		})

		node.classList.remove('passiveColorNode')
		node.classList.add('activeColorNode')
	}

	render(){
		return(
			<div className="colorPickContainer">
				{this.state.colorTags}
			</div>
			);
	}
}

export default ColorPick