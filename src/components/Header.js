import { h } from 'preact';
import { Link } from 'preact-router';

export default () => (
	<header style={styles.container}>
		<h1>Demo</h1>
		<nav>
			<Link style={styles.link} href='/'>Home</Link>
			<Link style={styles.link} href='/about'>About</Link>
		</nav>
	</header>
);

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 16,
		background: 'linear-gradient(90deg,#2ebd59,#00794a)',
		color: '#ffffff',
		fontWeight: 'bold',
		overflow: 'hidden'
	},
	link: {
		display: 'inline-block',
		textDecoration: 'none',
		color: '#ffffff',
		margin: 10,
		fontSize: 14
	}
};
