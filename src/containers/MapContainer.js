import { connect } from 'react-redux';
import { initParkinglots, initHazards, selectedParkingLot, updateViewPort, initViewPort } from '../actions';
import Map from '../components/Map';

const mapDispatchToProps = (dispatch) => ({
    initParkinglots: (parkinglots) => { dispatch(initParkinglots(parkinglots)) },
    initHazards: (hazards) => { dispatch(initHazards(hazards)) },
    selectedParkingLot: (parkinglot) => { dispatch(selectedParkingLot(parkinglot)) },
    updateViewPort: (viewPort) => { dispatch(updateViewPort(viewPort)) },
    initViewPort: () => { dispatch(initViewPort()) }
})

const mapStateToProps = state => ({
    parkinglots: state.parkinglots,
    hazards: state.hazards,
    viewPort: state.viewPort
})

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapContainer;