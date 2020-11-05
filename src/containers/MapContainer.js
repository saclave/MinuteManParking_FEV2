import { connect } from 'react-redux';
import { initParkinglots, initHazards, selectedParkingLot, updateViewport, initViewport, updateInitViewport } from '../actions';
import Map from '../components/Map';

const mapDispatchToProps = (dispatch) => ({
    initParkinglots: (parkinglots) => { dispatch(initParkinglots(parkinglots)) },
    initHazards: (hazards) => { dispatch(initHazards(hazards)) },
    selectedParkingLot: (parkinglot) => { dispatch(selectedParkingLot(parkinglot)) },
    updateViewport: (viewport) => { dispatch(updateViewport(viewport)) },
    initViewport: () => { dispatch(initViewport()) },
    updateInitViewport: (isInitViewport) => { dispatch(updateInitViewport(isInitViewport))}
})

const mapStateToProps = state => ({
    parkinglots: state.parkinglots,
    hazards: state.hazards,
    viewport: state.viewport,
    isInitViewport: state.isInitViewport
})

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapContainer;