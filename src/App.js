import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Servicios } from './components/Servicios';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';

function App() {
	return (
		<main className="main" id="top">
			<a without="true" rel="noreferrer" href="https://api.whatsapp.com/send?phone=56936662380&text=Hola,%20les%20hablo%20desde%20su%20web" className="float" target="_blank">
				<i className="fa fa-whatsapp my-float"></i>
			</a>
			<Navbar />
			<Home />
			<About />
			<Servicios />
			<Contacto />
			<Footer />
		</main>
	);
}

export default App;
