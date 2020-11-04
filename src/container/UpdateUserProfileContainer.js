import {connect} from "react-redux";
import UpdateUserProfile from "../components/UpdateUserProfile";
import {updateUser, addCar} from "../actions";

const mapDispatchToProps = (dispatch) =>({
    updateUser: (account) => {dispatch(updateUser(account))},
    addCar: (cars) => {dispatch(addCar(cars))}
})

const mapStateToProps = state =>({
    account: state.authentication.account
})

const UpdateUserProfileContainer = connect(mapStateToProps, mapDispatchToProps) (UpdateUserProfile)

export default UpdateUserProfileContainer;