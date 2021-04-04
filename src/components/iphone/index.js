import React from 'react';

const IPhone = ({ children }) => {
	const style = `
		.iphone {
			background-color: white;
			border-radius: 50px;
			width: 35vh;
			height: 70vh;
			margin: 150px;
		}

		.iphone .topbar {
			display: flex;
			/*background: grey;*/
			padding: 10px 50px 10px 50px;
			border-top-left-radius: 50px;
			border-top-right-radius: 50px;
		}

		.iphone .bars {

		}

		.iphone .content {
			padding: 50px;
		}
`;

	return <>
		<style>{style}</style>
		<div className="iphone">
			<div className="topbar">
				<div className="clock">21:30</div>
				<div className="bars" />
				<div className="wifi" />
				<div className="power" />
			</div>
			<div className="content">
			{children}
			</div>
		</div>
	</>
}

export default IPhone;
