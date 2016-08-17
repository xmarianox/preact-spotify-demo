import { h } from 'preact';

export default () => (
	<div style={styles.container}>
		<p>App demo para practicar React (preact) utilizando la API de Spotify.</p>
	</div>
);

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '16px',
		fontSize: 14,
		lineHeight: '26px',
		fontWeight: '400'
	}
}