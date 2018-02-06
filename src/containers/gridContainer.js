import { connect } from 'react-redux';
import Grid from '../components/grid.js';

const mapStateToProps = (state) => {
  return {
    grid: state.tetris.grid,
    currentPiece: state.tetris.currentPiece,
    isPlaying: state.isPlaying,
  }
}

const GridContainer = connect(
  mapStateToProps,
)(Grid);

export default GridContainer;
