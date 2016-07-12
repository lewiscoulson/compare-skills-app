import React from 'react';
import {Router, Route, IndexRoute, hashHistory}  from 'react-router';

import AddSkillsContainer from '../containers/AddSkillsContainer';
import ResultsContainer from '../containers/ResultsContainer';
import SkillDetailContainer from '../containers/SkillDetailContainer';

import Main from '../components/Main';

export default (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={AddSkillsContainer} />
			<Route path='results' component={ResultsContainer} />
			<Route path='skill/:name' component={SkillDetailContainer} />
		</Route>
	</Router>
)
