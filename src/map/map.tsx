import {useRef, useEffect} from 'react';
import { CITIES } from '../const';
import { MapPropsType } from '../ts_types';
import { useSelector } from 'react-redux';
import useMap from '../hooks/use-map';

import L, {Icon} from 'leaflet';
import { StateType } from '../reducer';

export const MapComp = ({crdList}:MapPropsType) => {


  const currentCity = useSelector((state: StateType) => state.city);

  const currentCityCrd = CITIES.find((city) => {
    if (city.name === currentCity) {
      return true;
    }
  });
  const defaultCustomIcon = new Icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map && currentCityCrd) {
      map.flyTo([ currentCityCrd.location.latitude, currentCityCrd.location.longitude ], currentCityCrd.location.zoom);

      const markerLayer = L.layerGroup().addTo(map);
      markerLayer.clearLayers();

      crdList.forEach((crd) => {
        const marker = L.marker([ crd.latitude, crd.longitude ]).setIcon(defaultCustomIcon);
        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  });


  return (
    <div
      style={{height: '700px'}}
      ref={mapRef}
    >
    </div>
  );
};
