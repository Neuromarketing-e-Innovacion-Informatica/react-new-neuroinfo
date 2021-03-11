import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Servicios } from './components/Servicios';
import { Unete } from './components/Unete';
import { Footer } from './components/Footer';

function App() {
	return (
		<main className="main" id="top">
			<Navbar />
			<Home />
			<About />
			<Servicios />
			<Unete />
			<Footer />
		</main>
	);
}

export default App;
