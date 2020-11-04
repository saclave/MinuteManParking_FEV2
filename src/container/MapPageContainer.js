import { connect } from 'react-redux';
import { addParkinglot } from '../actions';
import MapPage from '../components/MapPage';

const mapDispatchToProps = (dispatch) =>({
    addParkinglot: (parkinglot) => {dispatch(addParkinglot(parkinglot))},
})

const MapPageContainer = connect(mapDispatchToProps)(MapPage);

export default MapPageContainer;