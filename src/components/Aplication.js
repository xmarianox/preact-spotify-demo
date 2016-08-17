import { h } from 'preact';
import Router from 'preact-router';
import Header from 'components/Header';
import Home from 'containers/Home';
import About from 'containers/About';
/** Legacy method
export default function() {
	return <h1>Hola Mundo</h1>
}
*/
 export default () => (
 	<div>
 		<Header />
 		<Router>
 			<Home path='/' />
 			<About path='/about' />
 		</Router>
 	</div>
 );
