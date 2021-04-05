import IPhone from '../components/iphone';
import Browser from '../components/browser';
import Background from '../components/background';

import desktop from '../../desktop.png';
import mobile from '../../mobile.png';

const Home = () => {
	return <Background>
		<div style={{
			display: 'flex',
		}}>
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
