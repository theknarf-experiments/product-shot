import React from 'react';

const IPhone = ({ children }) => {
	const style = `
		.iphone {
			position: relative;
			background-color: #E3E8EC;
			border-radius: 50px;
			width: 35vh;
			height: 70vh;
			margin: 150px;
			overflow: hidden;
			padding: 25px;
		}

		.iphone .topbar {
			position: absolute;
			top: 25px;
			left: 25px;
			right: 25px;
			height: 50px;
			display: flex;
			/*background: grey;*/
			border-top-left-radius: 50px;
			border-top-right-radius: 50px;
		}

		.iphone .clock {
			margin: 15px 25px;
		}

		.iphone .notch {
			background-color: #E3E8EC;
			width: 150px;
			height: 35px;
			border-bottom-left-radius: 50px;
			border-bottom-right-radius: 50px;
		}

		.iphone .bars {

		}

		.iphone .content {
			border-radius: 50px;
			overflow: hidden;
			background: white;
			height: 100%;
		}

		.iphone .content img {
			max-width: 100%;
		}
`;

	return <>
		<style>{style}</style>
		<div className="iphone">
			<div className="topbar">
				<div className="clock">21:30</div>
				<div className="notch" />
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
