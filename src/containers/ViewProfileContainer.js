import { connect } from 'react-redux';
import ViewProfile from '../components/ViewProfile';

const mapStateToProps = state => ({
    account: state.authentication.account
});
const ViewProfileContainer = connect(mapStateToProps)(ViewProfile);

export default ViewProfileContainer;