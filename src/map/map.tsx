import {useRef, useEffect} from 'react';
import { cityType } from '../ts_types';
import { mapPropsType } from '../ts_types';
import { useSelector } from 'react-redux';
import useMap from '../hooks/use-map';

import L, {Icon} from 'leaflet';
import { stateType } from '../reducer';

export const MapComp = ({crdList}:mapPropsType) => {


  const currentCity = useSelector((state: stateType) => state.city);


  const cities:cityType[] = [{
    title: 'Amsterdam',
    lat: 52.23,
    lng: 4.54,
    zoom: 10,
  },
  {
    title: 'Paris',
    lat: 48.864716,
    lng: 2.349014,
    zoom: 10,
  }
  ];


  const currentCityCrd = cities.find((city) => {
    if (city.title === currentCity) {
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
      map.flyTo([ currentCityCrd.lat, currentCityCrd.lng ], currentCityCrd.zoom);

      const markerLayer = L.layerGroup().addTo(map);
      markerLayer.clearLayers();

      crdList.forEach((crd) => {
        const marker = L.marker([ crd.lat, crd.lng ]).setIcon(defaultCustomIcon);
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
