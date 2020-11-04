import {connect} from "react-redux";
import PaymentPage from "../components/PaymentPage";
import {updateParkinglot, updateUser, addTicket} from "../actions";

const mapDispatchToProps = (dispatch) =>({
    updateParkinglot: (parkinglot) => {dispatch(updateParkinglot(parkinglot))},
    updateUser: (account) => {dispatch(updateUser(account))},
    addTicket: (ticket) => {dispatch(addTicket(ticket))}
})

const mapStateToProps = state =>({
    parkinglot: state.selectedParkingLot.parkinglot,
    account: state.authentication.account,
    ticket: state.tickets[0],
    car: state.cars[0]
})

const PaymentPageContainer = connect(mapStateToProps, mapDispatchToProps) (PaymentPage)

export default PaymentPageContainer;