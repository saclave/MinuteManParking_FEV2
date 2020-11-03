import {connect} from "react-redux";
import UpdateUserProfile from "../components/UpdateUserProfile";
import {updateUser} from "../actions";

const mapDispatchToProps = (dispatch) =>({
    updateUser: (account) => {dispatch(updateUser(account))}
})

const mapStateToProps = state =>({
    account: state.authentication.account
})

const UpdateUserProfileContainer = connect(mapStateToProps, mapDispatchToProps) (UpdateUserProfile)

export default UpdateUserProfileContainer;