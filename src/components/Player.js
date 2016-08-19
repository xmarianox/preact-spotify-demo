import {h} from 'preact';

export default ({ audioSrc }) => (
  <audio id="player" style={styles.player}>
    <source src={audioSrc} type="audio/mpeg" />
  </audio>
);

const styles = {
  player: {
    display: 'block'
  }
}
