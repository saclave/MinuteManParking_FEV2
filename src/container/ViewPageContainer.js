import { connect } from 'react-redux';
import ViewPage from '../components/ViewPage';

const mapStateToProps = state => ({
    account: state.authentication.account
});
const ViewPageContainer = connect(mapStateToProps)(ViewPage);

export default ViewPageContainer;