import { offerType } from './mocks/offers';
import { reviewType } from './mocks/reviews';

export type offersMockPropsType = {
    offersMock:Array<offerType>;
  }

export type offerMockPropsType = {
    offerMock: offerType;
}

export type reviewPropsType = {
  review:reviewType;
}

export type crdType = {
  key: number
  lat: number,
  lng: number,
} 

export type mapPropsType = {
  crdList: crdType[]
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
