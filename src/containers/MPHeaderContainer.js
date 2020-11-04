import { connect } from 'react-redux';
import MPHeader from '../components/MPHeader';

const mapStateToProps = state => ({
    authenticated: state.authentication.authenticated
});

export default connect(mapStateToProps)(MPHeader);