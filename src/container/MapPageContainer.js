import { connect } from 'react-redux';
import { initParkinglots } from '../actions';
import MapPage from '../components/MapPage';
import { getParkingLots } from '../apis/accounts';


const mapDispatchToProps = (dispatch) =>({
    initParkinglots: (parkinglots) => {dispatch(initParkinglots(parkinglots))},
})

const mapStateToProps = state =>({
    parkinglots: state.parkinglots,
})

const MapPageContainer = connect(mapStateToProps, mapDispatchToProps)(MapPage);

export default MapPageContainer;