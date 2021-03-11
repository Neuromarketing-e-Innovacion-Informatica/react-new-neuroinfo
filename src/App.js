import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Inicio } from './Inicio';
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

					<Route component={NoPage} />
				</Switch>

			</main>
		</Router>
	);
}

export default App;
