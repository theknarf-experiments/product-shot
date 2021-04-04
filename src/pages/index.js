import IPhone from '../components/iphone';
import Browser from '../components/browser';
import Background from '../components/background';

const Home = () => {
	return <Background>
		<div style={{
			display: 'flex',
		}}>
		<Browser>haha</Browser>
		<IPhone>lol</IPhone>
		</div>
	</Background>;
}

export default Home;
