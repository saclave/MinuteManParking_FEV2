import React, { Component } from 'react';

import HomePageContentTitle from './HomePageContentTitle';

import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, } from "react-google-maps";

class HomePageMap extends Component {
    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                <Marker
                    draggable={true}
                    onDragEnd={this.onDragEnd}
                    position={{ lat: -34.397, lng: 150.644 }}
                >
                    <InfoWindow>
                        <div>
                            Sample Location
                        </div>
                    </InfoWindow>
                </Marker>
            </GoogleMap>
        ));

        return (
            <div className="home-page-content">
                <HomePageContentTitle id="map" text="Map" />
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfcBAIc0tdsDnV-UZqPxC1nyYBupfpPHE&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default HomePageMap;