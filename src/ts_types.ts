import { offerType } from './mocks/offers';

export type offersMockPropsType = {
    offersMock:Array<offerType>;
  }

export type offerMockPropsType = {
    offerMock: offerType;
}

export type cityType = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
}

export type mapRefType = {
  current: HTMLDivElement;
}
