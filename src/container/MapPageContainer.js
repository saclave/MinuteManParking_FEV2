import { connect } from 'react-redux';
import { initParkinglots, initHazards, selectedParkingLot } from '../actions';
import MapPage from '../components/MapPage';
import { getParkingLots } from '../apis/accounts';


const mapDispatchToProps = (dispatch) => ({
    initParkinglots: (parkinglots) => { dispatch(initParkinglots(parkinglots)) },
    initHazards: (hazards) => { dispatch(initHazards(hazards)) },
    selectedParkingLot: (parkinglot) => { dispatch(selectedParkingLot(parkinglot)) }
})

const mapStateToProps = state => ({
    parkinglots: state.parkinglots,
    hazards: state.hazards
})

const MapPageContainer = connect(mapStateToProps, mapDispatchToProps)(MapPage);

export default MapPageContainer;