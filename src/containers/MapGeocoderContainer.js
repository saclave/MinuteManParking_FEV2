import { connect } from 'react-redux';
import { updateViewport } from '../actions';
import MapGeocoder from '../components/MapGeocoder';


const mapDispatchToProps = (dispatch) => ({
    updateViewport: (viewport) => { dispatch(updateViewport(viewport)) }
})

const mapStateToProps = state => ({
    viewport: state.viewport
})

const MapGeocoderContainer = connect(mapStateToProps, mapDispatchToProps)(MapGeocoder);

export default MapGeocoderContainer;