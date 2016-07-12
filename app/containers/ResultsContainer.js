import React from 'react';
import {Link} from 'react-router';
import SkillChart from '../components/SkillChart';

let ResultsContainer = React.createClass({
	getInitialState: function() {
		return {
			skillOne: '',
			skillTwo: ''
		}
	},
	componentDidMount: function() {
		var query = this.props.location.query;
		this.setState({
			skillOne: query.skillOne,
			skillTwo: query.skillTwo
		});
	},
	render: function() {
		return (
			<div className='container'>
				<div className="row">
					<div className="col-md-5">
						<h2>{this.state.skillOne}</h2>
						<SkillChart skill={this.state.skillOne} />
						<Link to={'skill/' + this.state.skillOne}>
							<button className='btn btn-default'>detail</button>
						</Link>
					</div>

					<div className="col-md-5 col-md-offset-2">
						<h2>{this.state.skillTwo}</h2>
						<SkillChart skill={this.state.skillTwo} />
						<Link to={'skill/' + this.state.skillTwo}>
							<button className='btn btn-default'>detail</button>
						</Link>
					</div>
				</div>
			</div>
		)
	}
});

export default ResultsContainer;