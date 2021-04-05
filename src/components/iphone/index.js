import React from 'react';

const IPhone = ({ children }) => {
	const style = `
		.iphone {
			--iphone-size: 20rem;
			--iphone-edge: 10px;
			--iphone-radius: 30px;

			position: relative;
			background-color: #E3E8EC;
			width: var(--iphone-size);
			height: calc(2 * var(--iphone-size));
			overflow: hidden;
			padding: var(--iphone-edge);
			border-radius: var(--iphone-radius);
			filter: drop-shadow(0 0 2rem grey);
		}

		.iphone .topbar {
			position: absolute;
			top: var(--iphone-edge);
			left: var(--iphone-edge);
			right: var(--iphone-edge);
			display: flex;
			align-items: center;
			justify-content: center;
			/*background: grey;*/
			border-top-left-radius: var(--iphone-radius);
			border-top-right-radius: var(--iphone-radius);
		}

		.iphone .notch {
			background-color: #E3E8EC;
			width: 150px;
			height: 25px;
			border-bottom-left-radius: 20px;
			border-bottom-right-radius: 20px;
		}

		.iphone .content {
			border-radius: var(--iphone-radius);
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
				<div className="notch" />
			</div>
			<div className="content">
			{children}
			</div>
		</div>
	</>
}

export default IPhone;
