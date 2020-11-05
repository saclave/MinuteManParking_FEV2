import { connect } from 'react-redux';
import MPHeader from '../components/MPHeader';

import { logout } from '../actions';

const mapStateToProps = state => ({
    authenticated: state.authentication.authenticated,
    account: state.authentication.account,
    ticket: state.tickets[0]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(logout())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MPHeader);