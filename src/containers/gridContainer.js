import { connect } from 'react-redux';
import grid from '../components/grid.js';

const mapStateToProps = (state) => {
  return {
    grid: state.grid,
  }
}

const GridContainer = connect(
  mapStateToProps,
)(grid);

export default GridContainer;
