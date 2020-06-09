import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Footer, PortoHeader} from './components/porto-components/header-footer'

import './App.css';

// import './porto-assets/vendor-others/modernizr/modernizr.min'

function App() {
	return <Router>
		<Route exact path="/" component={PortoHeader}/>
		<Route path="/footer" component={Footer}/>
	</Router>

	/*(
		<div className="App">
			<Omda />

			<button className="btn btn-primary">Test
				<i className="fa fa-google-wallet" />
				button</button>
		</div>
	)*/
}

export default App;
