import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import { cityType } from '../ts_types';
import { useState } from 'react';
import { Map } from 'leaflet';
import { mapPropsType, crdType } from '../ts_types';
export const MapComp = ({crdList}:mapPropsType) => {

  const city:cityType = {
    title: 'Amsterdam',
    lat: 52.23,
    lng: 4.54,
    zoom: 10,
  };

  const mapRef = useRef<HTMLDivElement>(null);


  const points = [
    {
      title: 'Саундвью',
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    }, {
      title: 'Ферри Поинт',
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    }
  ];
  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (map) {
      crdList.forEach((crd:crdType) => {
        leaflet
          .marker({
            lat: crd.lat,
            lng: crd.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  useEffect(() => {
    //leaflet map
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);


  return (
    <div
      style={{height: '700px'}}
      ref={mapRef}
    >
    </div>
  );
};
