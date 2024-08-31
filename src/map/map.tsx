import {useRef, useEffect} from 'react';
import { CITIES } from '../const';
import { MapPropsType } from '../ts_types';
import { useSelector } from 'react-redux';
import useMap from '../hooks/use-map';

import L from 'leaflet';
import { StateType } from '../reducer';
import { defaultCustomIcon, activeCustomIcon, MAIN_MAP_STYLE, OFFER_MAP_STYLE } from '../const';

export const MapComp = ({crdList,offerId}:MapPropsType) => {


  const currentCity = useSelector((state: StateType) => state.city);


  const currentCityCrd = CITIES.find((city) => {
    if (city.name === currentCity) {
      return true;
    }
  });


  const mapRef = useRef(null);
  const map = useMap(mapRef);


  useEffect(() => {
    if (map && currentCityCrd) {
      map.flyTo([ currentCityCrd.location.latitude, currentCityCrd.location.longitude ], currentCityCrd.location.zoom);

      const markerLayer = L.layerGroup().addTo(map);
      markerLayer.clearLayers();

      crdList.forEach((crd) => {


        const marker = L.marker([ crd.latitude, crd.longitude ]).setIcon((crd.id === offerId) ? activeCustomIcon : defaultCustomIcon);
        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  });

  return (
    <div
      style={crdList.length > 4 ? MAIN_MAP_STYLE : OFFER_MAP_STYLE}
      ref={mapRef}
    >
    </div>
  );
};
