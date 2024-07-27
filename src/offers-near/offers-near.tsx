import { offersMockPropsType } from '../ts_types';
import { Card } from '../card/card';
import { offerType } from '../mocks/offers';

export const OffersNear = ({offersMock}:offersMockPropsType) => (
  offersMock.map((offerMock:offerType) => (
    <span key={offerMock.key} >
      <Card offerMock={offerMock}/>
    </span>))
);
