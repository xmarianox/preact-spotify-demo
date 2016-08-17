import { h, Component } from 'preact';
import ListView from 'components/ListView';
import { fetchTracks } from 'services/datalayer';

export default class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			value: '',
			audio: ''
		}
	}

	renderItem(item) {
		return (
			<div style={styles.trackContainer}>
				<img src={item.album.images[2].url} width={item.album.images[2].width} height={item.album.images[2].height} />
				<div style={styles.trackInfoContainer}>
					<em style={styles.trackName}>{item.name}</em>
					<span style={styles.artistName}>{item.artists[0].name}</span>
				</div>
			</div>
		);
	}

	playPreview(item) {
		const audio = item.preview_url;
		this.setState({ audio });

		const player = document.getElementById('player');
		//console.log(player);
		player.play();
	}

	onInput(event) {
		const value = event.target.value;
		this.setState({ value });
		fetchTracks(value).then(items => this.setState({ items }));
	}

	render({}, { items, value, audio }) {
		console.log('query:', value);
		return (
			<div>
				<div style={styles.inputContainer}>
					<input placeholder='Buscar por track o album...' style={styles.input} value={value} onInput={this.onInput.bind(this)} />
				</div>
				<ListView items={items} renderItem={this.renderItem.bind(this)} playPreview={this.playPreview.bind(this)} />

				<audio id="player">
				  <source src={audio} type="audio/mpeg" />
				</audio>
			</div>
		);
	}
};

const styles = {
	inputContainer: {
		width: '100%',
		height: 'auto',
		margin: '0 auto',
		borderBottom: '1px solid #efefef',
		overflow: 'hidden'
	},
	input: {
		width: '100%',
		height: 'auto',
		padding: '0 16px',
		fontSize: 16,
		lineHeight: '38px'
	},
	trackContainer: {
		width: '100%',
		height: 'auto',
		padding: '0 8px',
		borderBottom: '1px solid #2ebd59',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	trackInfoContainer: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		margin: '0 16px',
		width: '100%'
	},
	trackName: {
		fontSize: 14,
		lineHeight: '26px',
		fontWeight: '600'
	},
	artistName: {
		fontSize: 14,
		lineHeight: '26px',
		fontWeight: '400'
	},
	player: {
		display: 'block'
	}
};