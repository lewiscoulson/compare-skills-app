import React from 'react';

function SkillInput(props) {
	return (
		<div className="col-md-6">
			<div className="form-group">
				<label htmlFor={props.id}>{props.id}</label>
				<input type='text' className='form-control' id={props.id} value={props.value} onChange={props.onChange} />
			</div>
		</div>
	)
}

export default SkillInput;