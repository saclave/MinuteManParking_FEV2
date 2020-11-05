import { connect } from 'react-redux';
import ReservePage from '../components/ReservePage';
import { updateInitViewport } from '../actions';

const mapStateToProps = state => ({
    parkinglot: state.selectedParkingLot.parkinglot,
    account: state.authentication.account,
});

const mapDispatchToProps = (dispatch) => ({
    updateInitViewport: (isInitViewport) => { dispatch(updateInitViewport(isInitViewport)) },
})

const ReservePageContainer = connect(mapStateToProps, mapDispatchToProps)(ReservePage);

export default ReservePageContainer;