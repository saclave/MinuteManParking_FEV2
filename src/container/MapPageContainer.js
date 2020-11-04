import { connect } from 'react-redux';
import { initParkinglots, getParkingLotById } from '../actions';
import MapPage from '../components/MapPage';



const mapDispatchToProps = (dispatch) =>({
    initParkinglots: (parkinglots) => {dispatch(initParkinglots(parkinglots))},
    getParkingLotById: (id) => {dispatch(getParkingLotById(id))}
})

const mapStateToProps = state =>({
    parkinglots: state.parkinglots,
})

const MapPageContainer = connect(mapStateToProps, mapDispatchToProps)(MapPage);

export default MapPageContainer;