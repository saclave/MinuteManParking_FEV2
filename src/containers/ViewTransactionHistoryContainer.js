import { connect } from 'react-redux';
import ViewTransactionHistory from '../components/ViewTransactionHistory';

const mapStateToProps = state => ({
    account: state.authentication.account,
})

const ViewTransactionHistoryContainer = connect(mapStateToProps)(ViewTransactionHistory)

export default ViewTransactionHistoryContainer;