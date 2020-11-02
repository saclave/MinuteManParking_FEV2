import { connect } from 'react-redux';
import ApplicationRoutes from '../components/ApplicationRoutes';

const mapStateToProps = state => ({
    authentication: state.authentication
});

export default connect(mapStateToProps)(ApplicationRoutes);