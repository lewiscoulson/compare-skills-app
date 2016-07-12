import React, { Component } from 'react'
import Link from 'react-router';

import SkillInput from '../components/SkillInput';

let AddSkillsContainer = React.createClass({
	contextTypes: {
	    router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			skillOne: '',
			skillTwo: ''
		}
	},
	handleChangeSkillOne: function(e) {
		this.setState({
			skillOne: e.target.value
		})
	},
	handleChangeSkillTwo: function(e) {
		this.setState({
			skillTwo: e.target.value
		})
	},
	handleSubmitSkills: function(e) {
		e.preventDefault();

		this.context.router.push({
			pathname: '/results',
			query: {
			  skillOne: this.state.skillOne,
			  skillTwo: this.state.skillTwo,
			}
		});
	},
	render: function() {
		return (
			<div className='container'>
				<form onSubmit={this.handleSubmitSkills}>
					<div className="row">
						<SkillInput
							id='skillOne'
							value={this.state.skillOne}
							onChange={this.handleChangeSkillOne} /> 
					  	<SkillInput
							id='skillTwo'
							value={this.state.skillTwo}
							onChange={this.handleChangeSkillTwo} /> 
					</div>
					<div className="row">
					 	<div className="col-md-12">
							<button type='submit' className='btn btn-default'>compare</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
});

export default AddSkillsContainer;