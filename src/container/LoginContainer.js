import { connect } from 'react-redux';
import { getAccount } from '../actions';
import Login from '../components/Login';

const mapDispatchToProps = dispatch => ({
    getAccount: (accounts) => { dispatch(getAccount(accounts)) },
});

const LoginContainer = connect(null, mapDispatchToProps)(Login);

export default LoginContainer;