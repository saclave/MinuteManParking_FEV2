import { connect } from 'react-redux';
import { initParkinglots, initHazards, selectedParkingLot, updateViewport, initViewport } from '../actions';
import Map from '../components/Map';

const mapDispatchToProps = (dispatch) => ({
    initParkinglots: (parkinglots) => { dispatch(initParkinglots(parkinglots)) },
    initHazards: (hazards) => { dispatch(initHazards(hazards)) },
    selectedParkingLot: (parkinglot) => { dispatch(selectedParkingLot(parkinglot)) },
    updateViewport: (viewport) => { dispatch(updateViewport(viewport)) },
    initViewport: () => { dispatch(initViewport()) }
})

const mapStateToProps = state => ({
    parkinglots: state.parkinglots,
    hazards: state.hazards,
    viewport: state.viewport
})

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapContainer;