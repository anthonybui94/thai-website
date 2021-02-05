import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import BigButton from './components/BigButton.jsx';
import SeeMoreButton from './components/SeeMoreButton.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App = () => {
	const orderLink = 'https://direct.chownow.com/order/20484/locations/29585';

	return (
		<BrowserRouter>
			<div className="flex flex-col items-center">
				<NavBar />
				<Switch>
					<Route path="/contact">
            <div>Hello</div>
          </Route>
					<Route path="/gallery">
            <div>Hello</div>
          </Route>
					<Route path="/menu">
						<div>Hello</div>
					</Route>
					<Route path="/">
						<div className="max-w-screen-2xl flex flex-col items-center space-y-12">
							<Hero />
							<BigButton text="get delivery now!" link={orderLink} />
							<Showcase />
							<SeeMoreButton />
						</div>
					</Route>
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
