import React from 'react';

function SkillChart(props) {
	return (
		<img src={'http://www.itjobswatch.co.uk/charts/contract-demand-trend.aspx?s=' + props.skill + '&l=london'} alt={props.skill + ' chart'} />
	)
};

export default SkillChart;