import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl } from "react-map-gl";
import * as parkDate from "../data/Manila-ParkingLot.json";
import * as towingZone from "../data/Manila-Towing.json";
import { getParkingLots, getHazardZones } from '../apis/accounts';
import Geocoder from "react-mapbox-gl-geocoder";

class MapPage extends Component {

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

    componentDidMount() {
        getParkingLots().then(response => {
            console.log(response.data);
            this.props.initParkinglots(response.data)
        });

        getHazardZones().then(response => {
            console.log(response.data);
            this.props.initHazards(response.data)
        });
    }

    addReserveParking = () => {
        this.props.selectedParkingLot(this.state.selectedPark);
        this.props.history.push('/reserve');
    }

    onCloseParking = () => {
        this.setState({ selectedPark: null })
        this.setState({ towingPark: null })
    }

    onSelected = (viewport, item) => {
        this.setState({
            viewport
        })
    }


    onSelectHazardType = (hazard) => {
        const hazardType = hazard.type;
        console.log(hazardType);
        if (hazardType === "TRAFFIC") {
            return "/traffic.png";
        }
        if (hazardType === "TOWAWAY") {
            return "/tow-away.png";
        }
        if (hazardType === "STOP") {
            return "/stop.png";
        }
        if (hazardType === "ROUNDABOUT") {
            return "/roundabout.png";
        }
        if (hazardType === "PARKING") {
            return "/public-parking.png";
        }
    }

    render() {
        const { viewport } = this.state;
        console.log("OOOOOOOOOOOOOOOOOOOOOOOOOO", this.state);
        const params = {
            country: "ph"
        }

        return (
            <div>
                <div id="div-map">
                    <ReactMapGL {...viewport}
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                        width="100vw"
                        height="100vh"
                        mapStyle="mapbox://styles/charlieborbz18/ckh0kaipu07ks19obt4p8jtff"
                        onViewportChange={viewport => this.setState({ viewport })}>

                        {this.props.parkinglots.map(parkinglot => (
                            <Marker key={parkinglot.id}
                                latitude={parkinglot.latitude}
                                longitude={parkinglot.longitude}
                            >
                                <button
                                    id="blue-btn"
                                    className="marker-btn"
                                    onClick={e => {
                                        e.preventDefault();
                                        // this.setState( {setSelectedPark: park} )
                                        // this.setState( {setTowingPark: null} )
                                        this.setState({ selectedPark: parkinglot })
                                    }}
                                >
                                    <img id="car-logo" src="/car-front.svg" alt="Parking Lot Icon" />
                                </button>
                            </Marker>
                        ))}

                        {this.props.hazards.map(hazard => (
                            <Marker
                                key={hazard.id}
                                latitude={hazard.latitude}
                                longitude={hazard.longitude}
                            >
                                <button
                                    id="red-btn"
                                    className="marker-btn"
                                    onClick={e => {
                                        e.preventDefault();
                                        this.setState({ towingPark: hazard })
                                    }}>

                                    <img id="x-mark" src={this.onSelectHazardType(hazard)} alt="Towing Icon" />
                                </button>
                            </Marker>
                        ))}

                        {this.state.towingPark ? (
                            <Popup latitude={this.state.towingPark.latitude}
                                longitude={this.state.towingPark.longitude}
                                // onClose={() => {
                                //     // setTowingPark(null);
                                //     // setSelectedPark(null);
                                //     this.setState({towingPark: null} )
                                // }}
                                closeButton={false}
                            >
                                <div className="towing-pop">
                                    <h2>{this.state.towingPark.type}</h2>
                                    <p>{this.state.towingPark.address}</p>
                                    <button id="red-btn" onClick={this.onCloseParking}>Close</button>
                                </div>
                            </Popup>
                        ) : null}

                        {this.state.selectedPark ? (
                            <Popup
                                latitude={this.state.selectedPark.latitude}
                                longitude={this.state.selectedPark.longitude}
                                // onClose={() => {
                                //     // setSelectedPark(null);
                                //     // this.setState({selectedPark: null} )
                                //     // setTowingPark(null);
                                // }}
                                closeButton={false}
                            >
                                <h2>{this.state.selectedPark.name}</h2>
                                <p>{this.state.selectedPark.address}</p>
                                <button id="blue-btn" onClick={this.addReserveParking}>Reserve</button>
                                <button id="red-btn" onClick={this.onCloseParking}>Close</button>
                            </Popup>
                        ) : null}

                        <div style={{ position: 'absolute', right: 0 }}>
                            <NavigationControl />
                            <GeolocateControl
                                positionOptions={{ enableHighAccuracy: true }}
                                trackUserLocation={true}
                            />
                        </div>
                    </ReactMapGL>
                </div>

                <div id="geocoder-div">
                    <Geocoder
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                        onSelected={this.onSelected}
                        viewport={viewport}
                        updateInputOnSelect={true}
                        hideOnSelect={true}
                        initialInputValue="Enter Location..."
                        value=""
                        queryParams={params}
                        position="top-left"
                        limit={8}
                    />
                </div>
            </div>
        );
    }
}

export default MapPage;
