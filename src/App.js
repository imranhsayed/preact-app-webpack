import React from 'preact-compat';
import { Router, Link } from "preact-router";
import About from "./components/About";

class App extends React.Component {

	render() {
		return(
			<React.Fragment>
				<Link href="/about">About Us</Link>
				<Router>
					<About path="/about"/>
				</Router>
			</React.Fragment>
		);
	}
}

export default App