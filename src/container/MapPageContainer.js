import { connect } from 'react-redux';
import { initParkinglots, getParkingLotById, selectedParkingLot } from '../actions';
import { initParkinglots, initHazards } from '../actions';
import MapPage from '../components/MapPage';
import { getParkingLots } from '../apis/accounts';


const mapDispatchToProps = (dispatch) =>({
    initParkinglots: (parkinglots) => {dispatch(initParkinglots(parkinglots))},
    initHazards: (hazards) => {dispatch(initHazards(hazards))}
})

const mapStateToProps = state =>({
    parkinglots: state.parkinglots,
    hazards: state.hazards
})

const MapPageContainer = connect(mapStateToProps, mapDispatchToProps)(MapPage);

export default MapPageContainer;