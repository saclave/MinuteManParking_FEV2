import { connect } from 'react-redux';
import { initParkinglots, initHazards, selectedParkingLot, updateViewPort, initViewPort } from '../actions';
import MapPage from '../components/MapPage';
import { getParkingLots } from '../apis/accounts';


const mapDispatchToProps = (dispatch) => ({
    initParkinglots: (parkinglots) => { dispatch(initParkinglots(parkinglots)) },
    initHazards: (hazards) => { dispatch(initHazards(hazards)) },
    selectedParkingLot: (parkinglot) => { dispatch(selectedParkingLot(parkinglot)) },
    updateViewPort: (viewPort) => {dispatch(updateViewPort(viewPort))},
    initViewPort: () => {dispatch(initViewPort())}
})

const mapStateToProps = state => ({
    parkinglots: state.parkinglots,
    hazards: state.hazards,
    viewPort: state.viewPort
})

const MapPageContainer = connect(mapStateToProps, mapDispatchToProps)(MapPage);

export default MapPageContainer;