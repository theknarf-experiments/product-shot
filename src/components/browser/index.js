import React from 'react';

const Browser = ({ children }) => {
	const style = `
		.browser {
			width: 60vw;
			height: 50vh;
			border-radius: 15px;
			background: white;
			overflow: hidden;
			filter: drop-shadow(0 0 2rem grey);
		}

		.browser .topbar {
			display: flex;
			background-color: #E3E8EC;
			height: 50px;
			border-top-left-radius: 15px;
			border-top-right-radius: 15px;
			align-items: center;
		}

		.browser .btn {
			background-color: #B8C2D0;
			border-radius: 15px;
			width: 15px;
			height: 15px;
			margin: 5px;
		}

		.browser .btn:first-child {
			margin-left: 20px;
		}

		.browser .content {
		}

		.browser .content img {
			max-width: 100%;
		}
`;

	return <>
		<style>{style}</style>
		<div className="browser">
			<div className="topbar">
				<div className="btn" />
				<div className="btn" />
				<div className="btn" />
			</div>
			<div className="content">
			{children}
			</div>
		</div>
	</>;
}

export default Browser;
