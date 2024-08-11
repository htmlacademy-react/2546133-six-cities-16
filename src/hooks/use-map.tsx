import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map} from 'leaflet';
import { useSelector } from 'react-redux';
import { CITIES } from '../const';
import L from 'leaflet';
import { StateType } from '../reducer';


function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);


  const currentCity = useSelector((state:StateType) => state.city);
   


  const currentCityCrd = CITIES.find((city) => {
    if (city.name === currentCity) {
      return true;
    }
  });


  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && currentCityCrd) {
      const instance = L.map(mapRef.current, {center: [currentCityCrd.location.latitude, currentCityCrd.location.longitude], zoom: currentCityCrd.location.zoom});
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
