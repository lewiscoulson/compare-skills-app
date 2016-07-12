import React from 'react';

function Main(props) {
	return (
		<div>
			<header className="navbar navbar-static-top" id="top" role="banner">
				<div className="container"> 
					<div className="navbar-header">
						<h1>Compare Skills</h1> 
					</div>
				</div>
			</header>
			{props.children}
		</div>
	)
};

export default Main;