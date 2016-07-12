import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

import SkillChart from '../components/SkillChart';
import Repos from '../components/Repos';

let SkillDetailContainer = React.createClass({
	getInitialState: function() {
		return {
			skill: this.props.routeParams.name,
			repos: [],
			hasRepos: false
		}
	},
	componentDidMount: function() {
		axios
			.get('https://api.github.com/search/repositories?q=language:' + this.state.skill + '&sort=stars&order=desc')
			.then(function(repos) {
				this.setState({
					hasRepos: true,
					repos: repos.data.items
							.filter(function(repo, index) {
								return index < 5;
							})
							.map(function(repo) {
								return {
									name: repo.name,
									url: repo.html_url
								}
							})
				})
			}.bind(this));
	},
	render: function() {
		return (
			<div className='container'>
				<h2>{this.state.skill}</h2>
				<SkillChart skill={this.state.skill} />
				<h3>{this.state.hasRepos ? 'Popular Github Repos' : ''}</h3>
				<Repos repos={this.state.repos} />
				
				<Link to='/'>
					<button className='btn btn-default'>Compare different skills</button>
				</Link>
			</div>
		)
	}
});

export default SkillDetailContainer;