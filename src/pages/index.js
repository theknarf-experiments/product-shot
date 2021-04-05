import IPhone from '../components/iphone';
import Browser from '../components/browser';
import Background from '../components/background';

import desktop from '../../desktop.png';
import mobile from '../../mobile.png';

const Home = () => {
	const style = `
		.wrapper {
			display: flex;
		}

		.wrapper > * {
			margin: 150px;
		}
`;

	return <Background>
		<style>{style}</style>
		<div className="wrapper">
		<Browser>
			<img src={desktop} />
		</Browser>
		<IPhone>
			<img src={mobile} />
		</IPhone>
		</div>
	</Background>;
}

export default Home;
