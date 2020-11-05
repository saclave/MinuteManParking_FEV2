import { connect } from 'react-redux';
import { updateViewPort } from '../actions';
import Geocoders from '../components/Geocoders';


const mapDispatchToProps = (dispatch) => ({
    updateViewPort: (viewPort) => {dispatch(updateViewPort(viewPort))}
})

const mapStateToProps = state => ({
    viewPort: state.viewPort
})

const GeocodersContainer = connect(mapStateToProps, mapDispatchToProps)(Geocoders);

export default GeocodersContainer;