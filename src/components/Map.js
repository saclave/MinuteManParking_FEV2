import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl } from "react-map-gl";
import { getParkingLots, getHazardZones } from '../apis/accounts';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPark: null,
            towingPark: null,
            redirect: null
        }
    }

    componentDidMount() {
        getParkingLots().then(response => {
            this.props.initParkinglots(response.data)
        });

        getHazardZones().then(response => {
            this.props.initHazards(response.data)
        });

        if (this.props.isInitViewport) {
            this.props.initViewport();
        }
        this.props.updateInitViewport(true);
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/reserve' />
        }
    }

    addReserveParking = () => {
        this.props.selectedParkingLot(this.state.selectedPark);
        this.setState({ redirect: true });
    }

    onCloseParking = () => {
        this.setState({ selectedPark: null })
        this.setState({ towingPark: null })
    }

    onSelectHazardType = (hazard) => {
        switch (hazard.type) {
            case "TRAFFIC":
                return "/traffic.png";
            case "TOWAWAY":
                return "/tow-away.png";
            case "STOP":
                return "/stop.png";
            case "ROUNDABOUT":
                return "/roundabout.png";
            case "PARKING":
                return "/public-parking.png";
            case "NOPARK":
                return "/no-parking.png";
            case "OVERTAKE":
                return "/no-overtaking.png";
            case "NORIGHT":
                return "/no-right-turn.png";
            default:
                return null;
        }
    }

    render() {
        const viewport = this.props.viewport;
        return (
            <div id="div-map">
                {this.renderRedirect()}
                <ReactMapGL {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/charlieborbz18/ckh0kaipu07ks19obt4p8jtff"
                    onViewportChange={viewport => this.props.updateViewport(viewport)}>

                    {this.props.parkinglots.map(parkinglot => (
                        <Marker key={parkinglot.id}
                            latitude={parkinglot.latitude}
                            longitude={parkinglot.longitude}
                        >
                            <img className="map-icon" src="/car-front.svg" alt="Parking Lot Icon"
                                onClick={() => { this.setState({ towingPark: null, selectedPark: parkinglot }) }} />
                        </Marker>
                    ))}

                    {this.props.hazards.map(hazard => (
                        <Marker
                            key={hazard.id}
                            latitude={hazard.latitude}
                            longitude={hazard.longitude}
                        >
                            <img className="map-icon" src={this.onSelectHazardType(hazard)} alt="Towing Icon"
                                onClick={() => { this.setState({ towingPark: hazard, selectedPark: null }) }} />
                        </Marker>
                    ))}

                    {this.state.towingPark ? (
                        <Popup latitude={this.state.towingPark.latitude}
                            longitude={this.state.towingPark.longitude}
                            closeButton={false}
                        >
                            <div className="towing-pop">
                                <h2>{this.state.towingPark.name}</h2>
                                <p>{this.state.towingPark.address}</p>
                                <button id="red-btn" onClick={this.onCloseParking}>Close</button>
                            </div>
                        </Popup>
                    ) : null}

                    {this.state.selectedPark ? (
                        <Popup
                            latitude={this.state.selectedPark.latitude}
                            longitude={this.state.selectedPark.longitude}
                            closeButton={false}
                        >
                            <h2>{this.state.selectedPark.name}</h2>
                            <p>{this.state.selectedPark.address}</p>
                            <button id="blue-btn" onClick={this.addReserveParking}>Reserve</button>
                            <button id="red-btn" onClick={this.onCloseParking}>Close</button>
                        </Popup>
                    ) : null}

                    <div style={{ position: 'absolute', left: 5, top: 5 }}>
                        <NavigationControl />
                        <GeolocateControl
                            positionOptions={{ enableHighAccuracy: true }}
                            trackUserLocation={true}
                        />
                    </div>
                </ReactMapGL>
            </div >
        );
    }
}

export default Map;
