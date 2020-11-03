import {connect} from "react-redux";
import PaymentPage from "../components/PaymentPage";
import {updateParkinglot, updateUser, updateTicket} from "../actions";

const mapDispatchToProps = (dispatch) =>({
    updateParkinglot: (parkinglot) => {dispatch(updateParkinglot(parkinglot))},
    updateUser: (account) => {dispatch(updateUser(account))},
    updateTicket: (ticket) => {dispatch(updateTicket(ticket))}
})

const mapStateToProps = state =>({
    parkinglot: state.parkinglots[0],
    account: state.authentication.account,
    ticket: state.tickets[0]
})

const PaymentPageContainer = connect(mapStateToProps, mapDispatchToProps) (PaymentPage)

export default PaymentPageContainer;