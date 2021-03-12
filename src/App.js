import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Inicio } from './Inicio';
import { PaginasWeb } from './components/Servicios/PaginasWeb';
import { AppsWeb } from './components/Servicios/AppsWeb';
import { Tecnico } from './components/Servicios/Tecnico';
import { Asesorias } from './components/Servicios/Asesorias';
import { Asistencia } from './components/Servicios/Asistencia';
import { Redes } from './components/Servicios/Redes';

import { NoPage } from './NoPage';

function App() {
	return (
		<Router>
			<main className="main" id="top">
				<a without="true" rel="noreferrer" href="https://api.whatsapp.com/send?phone=56936662380&text=Hola,%20les%20hablo%20desde%20su%20web" className="float" target="_blank">
					<i className="fa fa-whatsapp my-float"></i>
				</a>
				<Switch>
					<Route exact path="/" component={ Inicio } />

					<Route exact path="/paginas-web" component={ PaginasWeb } />
					<Route exact path="/aplicaciones-web" component={ AppsWeb } />
					<Route exact path="/servicio-tecnico" component={ Tecnico } />
					<Route exact path="/asesorias" component={Asesorias} />
					<Route exact path="/asistencia-tecnica" component={ Asistencia } />
					<Route exact path="/redes-sociales" component={ Redes } />

					<Route component={NoPage} />
				</Switch>

			</main>
		</Router>
	);
}

export default App;
