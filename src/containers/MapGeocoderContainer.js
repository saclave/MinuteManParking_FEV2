import { connect } from 'react-redux';
import { updateViewPort } from '../actions';
import MapGeocoder from '../components/MapGeocoder';


const mapDispatchToProps = (dispatch) => ({
    updateViewPort: (viewPort) => { dispatch(updateViewPort(viewPort)) }
})

const mapStateToProps = state => ({
    viewPort: state.viewPort
})

const MapGeocoderContainer = connect(mapStateToProps, mapDispatchToProps)(MapGeocoder);

export default MapGeocoderContainer;