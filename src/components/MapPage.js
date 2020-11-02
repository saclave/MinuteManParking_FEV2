import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "../data/Manila-ParkingLot.json"
import mapboxgl from 'mapbox-gl';
import MPHeader from './MPHeader.js';

export default function MapPage() {
    const [viewport, setViewport] = useState({
        latitude: 14.5371,
        longitude: 120.9835,

        width: "92vw",
        height: "80vh",
        zoom: 18,
    });

    const [selectedPark, setSelectedPark] = useState(null);

    useEffect(() => {
        const listener = e => {
            if(e.key === "Escape") {
                setSelectedPark(null);
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
                {parkDate.features.map(park => (
                    <Marker
                        key={park.properties.PARK_ID}
                        latitude={park.geometry.coordinates[1]}
                        longitude={park.geometry.coordinates[0]}
                    >
                        <button
                            className="marker-btn"
                            onClick={e => {
                                e.preventDefault();
                                setSelectedPark(park);
                            }}>
                            <img id="car-logo" src="/car-front.svg" alt="Parking Lot Icon" />
                        </button>
                    </Marker>
                ))}

                {selectedPark ? (
                    <Popup latitude={selectedPark.geometry.coordinates[1]}
                        longitude={selectedPark.geometry.coordinates[0]}
                        onClose = {() => {
                            setSelectedPark(null);
                        }}

                    >
                        <div>
                            <h2>{selectedPark.properties.NAME}</h2>
                            <p>{selectedPark.properties.ADDRESS}</p>
                            <button>Reserve</button>
                        </div>
                    </Popup>
                ) : null }
            </ReactMapGL>
        </div>
    );
}