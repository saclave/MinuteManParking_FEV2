import { connect } from 'react-redux';
import { initParkinglots, getParkingLotById, selectedParkingLot } from '../actions';
import MapPage from '../components/MapPage';



const mapDispatchToProps = (dispatch) =>({
    initParkinglots: (parkinglots) => {dispatch(initParkinglots(parkinglots))},
    getParkingLotById: (id) => {dispatch(getParkingLotById(id))},
    selectedParkingLot: (parkinglot) => {
        dispatch(selectedParkingLot(parkinglot))
    },
})

const mapStateToProps = state =>({
    parkinglots: state.parkinglots,
})

const MapPageContainer = connect(mapStateToProps, mapDispatchToProps)(MapPage);

export default MapPageContainer;