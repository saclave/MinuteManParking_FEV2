import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';
import { authenticate } from '../actions';

const mapStateToProps = state => ({
    accounts: state.accounts
});

const mapDispatchToProps = (dispatch) => ({
    authenticate: (account) => {
        dispatch(authenticate(account))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);