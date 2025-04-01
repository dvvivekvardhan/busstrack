import { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const BusTracker = () => {
    const [busIndex, setBusIndex] = useState(0);
    const [busMarker, setBusMarker] = useState(null);
    const [traveledPath, setTraveledPath] = useState([]);
    const [busStatus, setBusStatus] = useState("Bus is at: --");
    const [distanceToDestination, setDistanceToDestination] = useState("Distance to Destination: --");
    const [timeToDestination, setTimeToDestination] = useState("Time to Destination: --");

    const mapRef = useRef(null);
    const routeLayerRef = useRef(null);
    const busMarkerRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map("map").setView([17.5403, 78.5776], 13);
            L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
                attribution: "&copy; CartoDB contributors",
                maxZoom: 19
            }).addTo(mapRef.current);
        }

        const maisammaguda = [17.5403, 78.5776];
        const jbs = [17.4474, 78.4963];
        const busRoute = [
            maisammaguda,
            [17.5313, 78.5637],
            [17.4890, 78.5180],
            jbs
        ];

        const sourceIcon = L.icon({
            iconUrl: "https://images.shiksha.com/mediadata/images/1627650566phpVGbCC8.jpeg",
            iconSize: [40, 40],
            iconAnchor: [20, 40]
        });

        const destinationIcon = L.icon({
            iconUrl: "https://img.icons8.com/ios/452/destination.png",
            iconSize: [40, 40],
            iconAnchor: [20, 40]
        });

        L.marker(maisammaguda, { icon: sourceIcon }).addTo(mapRef.current).bindPopup("Start: Maisammaguda").openPopup();
        L.marker(jbs, { icon: destinationIcon }).addTo(mapRef.current).bindPopup("End: JBS (Jubilee Bus Station)");

        if (!routeLayerRef.current) {
            routeLayerRef.current = L.polyline(busRoute, { color: 'red', weight: 4 }).addTo(mapRef.current);
        }

        const moveBusAlongRoute = () => {
            if (busIndex >= busRoute.length) return;
            const [lat, lng] = busRoute[busIndex];

            if (!busMarkerRef.current) {
                busMarkerRef.current = L.marker([lat, lng], { icon: L.icon({
                    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                    iconSize: [40, 40],
                    iconAnchor: [20, 40]
                }) }).addTo(mapRef.current);
            } else {
                busMarkerRef.current.setLatLng([lat, lng]).update();
            }

            const updatedPath = [...traveledPath, [lat, lng]];
            setTraveledPath(updatedPath);
            L.polyline(updatedPath, { color: 'blue', weight: 3 }).addTo(mapRef.current);
            setBusStatus(`Bus is at: Latitude: ${lat.toFixed(5)}, Longitude: ${lng.toFixed(5)}`);
            setBusIndex(prev => prev + 1);
        };

        const interval = setInterval(moveBusAlongRoute, 3000);
        return () => clearInterval(interval);
    }, [busIndex, traveledPath]);

    return (
        <div>
            <div id="map" style={{ height: "80vh" }}></div>
            <div id="info-bar" style={{ height: "20vh", backgroundColor: "#f8f9fa", padding: "10px", boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>{busStatus}</div>
                <div>{distanceToDestination}</div>
                <div>{timeToDestination}</div>
            </div>
        </div>
    );
};

export default BusTracker;