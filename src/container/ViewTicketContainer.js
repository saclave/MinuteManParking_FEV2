import { connect } from 'react-redux';
import { getAccount } from '../actions';
import ViewTicket from '../components/ViewTicket';

const mapStateToProps = state => ({
    account: state.account
});
const ViewTicketContainer = connect(mapStateToProps)(ViewTicket);

export default ViewTicketContainer;