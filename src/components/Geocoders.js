import React, { Component } from 'react';
import Geocoder from "react-mapbox-gl-geocoder";

class Geocoders extends Component {
    

    render() {
        return (
                <div id="geocoder-div">
                    <Geocoder
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                        onSelected={this.props.updateViewPort}
                        viewport={this.props.viewPort}
                        updateInputOnSelect={true}
                        hideOnSelect={true}
                        initialInputValue="Enter Location..."
                        value=""
                        queryParams={{country: ""}}
                        position="top-left"
                        limit={8}
                    />
                </div>
        );
    }
}

export default Geocoders;