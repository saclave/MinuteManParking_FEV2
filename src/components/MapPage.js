import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
import * as parkDate from "../data/Manila-ParkingLot.json";
import * as towingZone from "../data/Manila-Towing.json";

class MapV4Page extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: { latitude: 14.5371, longitude: 120.9835, zoom: 18 },
            selectedPark: null,
            towingPark: null,
            setSelectedPark: null,
            setTowingPark: null,
        }
    }

    addReserveParking = () => {
        console.log("qweqwe");
        // this.props.history.push('/reserve');
    }

    onCloseParking = () => {
        this.setState({selectedPark: null})
        this.setState({towingPark: null})
    }

    render() {
        const {viewport}  = this.state;
        // const parkingLot = [{selectedPark}];
        return (
            <ReactMapGL {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                width="100vw"
                height="100vh"
                mapStyle="mapbox://styles/charlieborbz18/ckh0kaipu07ks19obt4p8jtff"
                onViewportChange={viewport => this.setState({ viewport })}>

                {parkDate.features.map(park => (
                    <Marker key={park.properties.PARK_ID}
                        latitude={park.geometry.coordinates[1]}
                        longitude={park.geometry.coordinates[0]}
                    >
                        <button
                            id="blue-btn"
                            className="marker-btn"
                            onClick={e => {
                                e.preventDefault();
                                // this.setState( {setSelectedPark: park} )
                                // this.setState( {setTowingPark: null} )
                                this.setState( {selectedPark: park} )
                                
                            }}
                        >
                            
                            <img id="car-logo" src="/car-front.svg" alt="Parking Lot Icon" />
                        </button>
                    </Marker>
                ))}

                {towingZone.features.map(towing => (
                    <Marker
                        key={towing.properties.PARK_ID}
                        latitude={towing.geometry.coordinates[1]}
                        longitude={towing.geometry.coordinates[0]}
                    >
                        <button
                            id="red-btn"
                            className="marker-btn"
                            onClick={e => {
                                e.preventDefault();
                                this.setState( {towingPark: towing} )
                            }}>
                            <img id="x-mark" src="/x-mark.svg" alt="Towing Icon" />
                        </button>
                    </Marker>
                ))}

                {this.state.towingPark ? (
                    <Popup latitude={this.state.towingPark.geometry.coordinates[1]}
                        longitude={this.state.towingPark.geometry.coordinates[0]}
                        // onClose={() => {
                        //     // setTowingPark(null);
                        //     // setSelectedPark(null);
                        //     this.setState({towingPark: null} )
                        // }}
                        closeButton={false}
                    >
                        <div className="towing-pop">
                            <h2>{this.state.towingPark.properties.NAME}</h2>
                            <p>{this.state.towingPark.properties.ADDRESS}</p>
                            <button id="red-btn" onClick={this.onCloseParking}>Close</button>
                        </div>
                    </Popup>
                ) : null}

                {this.state.selectedPark ? (
                    <Popup
                        latitude={this.state.selectedPark.geometry.coordinates[1]}
                        longitude={this.state.selectedPark.geometry.coordinates[0]}
                        // onClose={() => {
                        //     // setSelectedPark(null);
                        //     // this.setState({selectedPark: null} )
                        //     // setTowingPark(null);
                        // }}
                        // onClose={this.onCloseParking}
                        closeButton={false}
                    >
                        <h2>{this.state.selectedPark.properties.NAME}</h2>
                        <p>{this.state.selectedPark.properties.ADDRESS}</p>
                        <button id="blue-btn" onClick={this.addReserveParking}>Reserve</button>
                        <button id="red-btn" onClick={this.onCloseParking}>Close</button>
                    </Popup>
                ) : null}


                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
            </ReactMapGL>
        );
    }
}

export default MapV4Page;
