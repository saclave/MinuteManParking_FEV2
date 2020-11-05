import React, { Component } from 'react';
import Geocoder from "react-mapbox-gl-geocoder";

import { SearchOutlined } from '@ant-design/icons';

class MapGeocoder extends Component {
    render() {
        return (
            <div className="map-geocoder">
                <p><SearchOutlined /> Search Minuteman Map</p>
                <Geocoder
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onSelected={this.props.updateViewport}
                    viewport={this.props.viewport}
                    updateInputOnSelect={true}
                    hideOnSelect={true}
                    value=""
                    queryParams={{ country: "" }}
                    position="top-left"
                    limit={20}
                    className="geocoder"
                />
            </div>
        );
    }
}

export default MapGeocoder;