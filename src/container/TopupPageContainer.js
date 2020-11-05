import {connect} from "react-redux";
import TopupPage from "../components/TopupPage";
import { updateUser } from "../actions";

const mapDispatchToProps = (dispatch) =>({
    updateUser: (account) => {dispatch(updateUser(account))},
})

const mapStateToProps = state =>({
    parkinglot: state.parkinglots[0],
    account: state.authentication.account,
    ticket: state.tickets[0],
})

const TopUpPageContainer = connect(mapStateToProps, mapDispatchToProps) (TopupPage)

export default TopUpPageContainer;