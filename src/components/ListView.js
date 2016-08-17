import { h } from 'preact';

export default ({ items, renderItem, playPreview }) => (
	<ul style={styles.listContainer}>
		{items.map(item => (
			<li style={styles.listItem} onClick={ e => playPreview(item)} >{renderItem(item)}</li>
		))}
	</ul>
);

const styles = {
	listContainer: {
		width: '100%',
		height: 'auto',
		maxHeight: '500px',
		overflow: 'hidden',
		overflowY: 'scroll',
	},
	listItem: {
		display: 'block'
	}
}