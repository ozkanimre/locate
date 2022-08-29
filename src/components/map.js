import React, { useRef, useEffect, useState } from 'react';
import { useLocation} from "react-router-dom";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';


const Map = () => {
  const location = useLocation();
  const state = location.state;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom] = useState(15);
  const [API_KEY] = useState('RP0H9tGfLR0uoLiC2rOk');


  useEffect(() => {
    if (map.current) return; 
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/voyager/style.json?key=${API_KEY}`,
      center: [29.129937739064285,41.01998251846039],
      zoom: zoom
    });

    
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    const isArray = Object.prototype.toString.call(state) == '[object Array]';//check if multiple locations or just one 
    if (!isArray){
      new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([state.lng,state.lat])
      .setPopup(new maplibregl.Popup().setHTML(`<img src="data:image/png;base64,${state.image}" width="100%"/>`))
      .addTo(map.current);
    }
    else{
      state.forEach(function (marker) {
        new maplibregl.Marker({color: "#FF0000"})
        .setLngLat([marker.lng,marker.lat])
        .setPopup(new maplibregl.Popup().setHTML(`<img src="data:image/png;base64,${marker.image}" width="100%"/>`))
        .addTo(map.current);
      });
    }
  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
 
  
};





export default Map;