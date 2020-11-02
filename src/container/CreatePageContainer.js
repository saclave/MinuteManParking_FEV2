import {connect} from "react-redux";
import CreatePage from "../components/CreatePage";
import {addUser} from "../actions";

const mapDispatchToProps = (dispatch) =>({
    addUser: (accounts) => {dispatch(addUser(accounts))}
})

const CreatePageContainer = connect(null, mapDispatchToProps) (CreatePage)

export default CreatePageContainer;