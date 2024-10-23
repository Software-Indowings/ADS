import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import './FullScreenMap.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicHJhdmVlbmluZG8xMiIsImEiOiJjbTJpd3Yyd2EwanhqMnFzYmlqN3Rlb2VkIn0.jdFJ_oi85VB7b2HblP4KCg';

const FullScreenMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11', // You can change the style here
      center: [-74.5, 40], // Initial map center [longitude, latitude]
      zoom: 9 // Initial map zoom level
    });
   
    // Cleanup on unmount
    return () => map.remove();
  }, []);

  return (
    <div className="map-container" ref={mapContainerRef}></div>
  );
};

export default FullScreenMap;
