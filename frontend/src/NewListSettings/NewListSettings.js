import React from 'react'
import './NewListSettings.css'

const NewListSettings = (props) => {
	return(
		<div className="newListSettingsCon">
			<select name="newListSettingsSelect" id="newListSettingsSelect" onClick={(event) => props.getSelectField(event)}>
				<option value="off" slected="selected" >Aus</option>
				<option value="daily">Täglich</option>
				<option value="weekly">Wöchendlich</option>
			</select>
		</div>
		);
}

export default NewListSettings