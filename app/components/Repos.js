import React from 'react';

function Repos(props) {
	return (
		<table className="table table-striped">
			<tbody>
				{props.repos.map(function(repo, index) {
					return (
						<tr key={index}>
							<td>
								<a href={repo.url}>{repo.name}</a>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
};

export default Repos;


