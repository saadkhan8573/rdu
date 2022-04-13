import React from 'react'
import { useState } from 'react'
import { Map as LeafletMap, TileLayer } from "react-leaflet";

const Home = () => {
    const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
    const [mapZoom, setMapZoom] = useState(3);
    return (
        <>
            <div className="map">
                <MapContainer center={mapCenter} zoom={mapZoom}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                </MapContainer>
            </div>
        </>
    )
}

export default Home
