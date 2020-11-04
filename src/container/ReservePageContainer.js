import { connect } from 'react-redux';
import { getParkinglot } from '../actions';
import ReservePage from '../components/ReservePage';

const mapStateToProps = state => ({
    //parkinglots: state.parkinglots
    parkinglot: state.selectedParkingLot.parkinglot
});
const ReservePageContainer = connect(mapStateToProps)(ReservePage);

export default ReservePageContainer;