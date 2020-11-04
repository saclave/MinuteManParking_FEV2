import { connect } from 'react-redux';
import { getAccount } from '../actions';
import ViewTicket from '../components/ViewTicket';

const mapStateToProps = state =>({
    parkinglot: state.selectedParkingLot.parkinglot,
    ticket: state.tickets[0],
    
})
const ViewTicketContainer = connect(mapStateToProps) (ViewTicket)

export default ViewTicketContainer;