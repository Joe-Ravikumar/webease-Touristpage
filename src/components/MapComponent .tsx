"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl, { Map } from "mapbox-gl";

interface Route {
  longitude: number;
  latitude: number;
}

interface MapComponentProps {
  tourRoutes: Route[];
}

const MapComponent: React.FC<MapComponentProps> = ({ tourRoutes }) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map: Map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0], // Adjust based on your default location
      zoom: 9,
    });

    tourRoutes.forEach((route: Route) => {
      new mapboxgl.Marker()
        .setLngLat([route.longitude, route.latitude])
        .addTo(map);
    });

    return () => map.remove();
  }, [tourRoutes]);

  return <div ref={mapContainer} className="h-96 w-full" />;
};

export default MapComponent;
