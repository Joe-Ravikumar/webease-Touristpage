import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

interface Props {
  tourRoutes: { latitude: number; longitude: number; title: string }[];
}

const MapComponent: React.FC<Props> = ({ tourRoutes }) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [tourRoutes[0].longitude, tourRoutes[0].latitude],
        zoom: 9,
      });

      tourRoutes.forEach((route) => {
        new mapboxgl.Marker()
          .setLngLat([route.longitude, route.latitude])
          .setPopup(new mapboxgl.Popup().setText(route.title))
          .addTo(map);
      });
    }
  }, [tourRoutes]);

  return <div className="h-96 w-full" ref={mapContainer}></div>;
};

export default MapComponent;
