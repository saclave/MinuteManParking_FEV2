import { connect } from 'react-redux';
import MPHeader from '../components/MPHeader';

import { logout, resetTickets } from '../actions';

const mapStateToProps = state => ({
    authenticated: state.authentication.authenticated,
    account: state.authentication.account,
    ticket: state.tickets[0]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    resetTickets: () => dispatch(resetTickets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MPHeader);