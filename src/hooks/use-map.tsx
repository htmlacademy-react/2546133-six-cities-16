import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map} from 'leaflet';
import { useSelector } from 'react-redux';
import { cityType } from '../ts_types';
import L from 'leaflet';
import { stateType } from '../reducer';


function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);


  const currentCity = useSelector((state:stateType) => state.city);
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


  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && currentCityCrd) {
      const instance = L.map(mapRef.current, {center: [currentCityCrd.lat, currentCityCrd.lng], zoom: currentCityCrd.zoom});
      const layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        });
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, currentCity]);

  return map;
}

export default useMap;
