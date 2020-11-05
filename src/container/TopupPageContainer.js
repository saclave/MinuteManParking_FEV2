import {connect} from "react-redux";
import TopupPage from "../components/TopupPage";
import { updateUser,updateAuthenticatedUser } from "../actions";

const mapDispatchToProps = (dispatch) =>({
    updateUser: (account) => {dispatch(updateUser(account))},
    updateAuthenticatedUser: (account) => {dispatch(updateAuthenticatedUser(account))}
})

const mapStateToProps = state =>({
    parkinglot: state.parkinglots[0],
    account: state.authentication.account,
    ticket: state.tickets[0],
})

const TopUpPageContainer = connect(mapStateToProps, mapDispatchToProps) (TopupPage)

export default TopUpPageContainer;