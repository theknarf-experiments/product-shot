import React from 'react';

const Background = ({ children }) => {
	// gradient taken from https://cssgradient.io/gradient-backgrounds/
	
	const style = `
		.background {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #4158D0;
			background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
		}
`;

	return <>
		<style>{style}</style>
		<div className="background">
			{children}
		</div>
	</>;
}

export default Background;
