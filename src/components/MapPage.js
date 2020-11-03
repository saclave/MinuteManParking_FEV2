import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
import * as parkDate from "../data/Manila-ParkingLot.json"
import MPHeader from './MPHeader.js';
import * as towingZone from "../data/Manila-Towing.json";

export default function MapPage() {
    const [viewport, setViewport] = useState({
        latitude: 14.5371,
        longitude: 120.9835,

        width: "92vw",
        height: "80vh",
        zoom: 18,
    });

    const [selectedPark, setSelectedPark] = useState(null);
    const [towingPark, setTowingPark] = useState(null);

    useEffect(() => {
        const listener = e => {
            if(e.key === "Escape") {
                setSelectedPark(null);
                setTowingPark(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        }

    }, []);

    return (
        <div className= "map-div">
                <div className="first">
                    <MPHeader />
                </div>
            <ReactMapGL {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/charlieborbz18/ckh0kaipu07ks19obt4p8jtff"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
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
                                setTowingPark(towing);
                                setSelectedPark(null);
                            }}>
                            <img id="x-mark" src="/x-mark.svg" alt="Towing Icon" />
                        </button>
                    </Marker>
                ))}

                {parkDate.features.map(park => (
                    <Marker
                        key={park.properties.PARK_ID}
                        latitude={park.geometry.coordinates[1]}
                        longitude={park.geometry.coordinates[0]}
                    >
                        <button
                            id="blue-btn"
                            className="marker-btn"
                            onClick={e => {
                                e.preventDefault();
                                setSelectedPark(park);
                                setTowingPark(null);
                            }}>
                            <img id="car-logo" src="/car-front.svg" alt="Parking Lot Icon" />
                        </button>
                    </Marker>
                ))}


                {towingPark ? (
                    <Popup latitude={towingPark.geometry.coordinates[1]}
                        longitude={towingPark.geometry.coordinates[0]}
                        onClose={() => {
                            setTowingPark(null);
                            setSelectedPark(null);
                        }}

                    >
                        <div className="towing-pop">
                            <h2>{towingPark.properties.NAME}</h2>
                            <p>{towingPark.properties.ADDRESS}</p>
                        </div>
                    </Popup>
                ) : null}

                {selectedPark ? (
                    <Popup latitude={selectedPark.geometry.coordinates[1]}
                        longitude={selectedPark.geometry.coordinates[0]}
                        onClose={() => {
                            setSelectedPark(null);
                            setTowingPark(null);
                        }}

                    >
                        <div className="parking-pop">
                            <h2>{selectedPark.properties.NAME}</h2>
                            <p>{selectedPark.properties.ADDRESS}</p>
                            <button id="blue-btn" onClick="">Reserve</button>
                        </div>
                    </Popup>
                ) : null}

                <GeolocateControl 
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    fitBoundsOptions= {{ maxZoom: 15 }}
                />
            </ReactMapGL>
        </div>
    );
}