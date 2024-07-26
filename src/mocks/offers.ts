import { landLordType } from './landlords';
import { reviewType } from './reviews';


export type itemType = {
    key: number;
    item: string;
}
export type offerType = {
    key: number;
    thumbnail: string;
    city: string;
    premium: boolean;
    cost: number;
    header: string;
    type: string;
    rating: string;
    photos: string[];
    description: string;
    bedroomsNum: number;
    guestNum: number;
    itemList: itemType[];
    landLord: landLordType;
    reviews: reviewType[];
    lat: number;
    lng: number;

}


export const offersMock:Array<offerType> = [{
  key: 1,
  thumbnail:'img/room.jpg',
  city: 'Amsterdam',
  premium:true,
  cost: 20,
  header: 'Test1',
  type: 'apartment',
  rating: '4.4',
  photos: ['img/room.jpg','img/room.jpg'],
  description: 'testdesc',
  bedroomsNum: 1,
  guestNum: 1,
  itemList: [
    {
      key: 1,
      item: 'Wifi'},
    {
      key: 2,
      item: 'Heating'}
  ],
  landLord: {
    userPic: 'img/avatar-max.jpg',
    name: 'John Doe',
    isPro: true,
  },
  reviews: [{
    key:1,
    userPic: 'img/avatar-max.jpg',
    name:'Some Guy',
    reviewRating: 5,
    reviewDate: 'April 2019',
    reviewText: 'Testreview'

  },
  {
    key:2,
    userPic: 'img/avatar-max.jpg',
    name:'Some Guy11',
    reviewRating: 7,
    reviewDate: 'April 2024',
    reviewText: 'Testreview22'

  }
],
  lat: 52.3909553943508,
  lng: 4.85309666406198

},
{
  key: 2,
  thumbnail:'img/room.jpg',
  city: 'Amsterdam',
  premium:false,
  cost: 25,
  header: 'TestHeader2',
  type: 'room',
  rating: '3.6',
  photos: ['img/room.jpg'],
  description: 'Something something',
  bedroomsNum: 2,
  guestNum: 2,
  itemList: [{key:1, item:'Wifi'}],
  landLord: {
    userPic: 'img/avatar-max.jpg',
    name: 'Jane Doe',
    isPro: false,
  },
  reviews: [{
    key: 1,
    userPic: 'img/avatar-max.jpg',
    name:'John Doe',
    reviewRating: 10,
    reviewDate: 'July 2024',
    reviewText: 'very nice'

  }],
  lat: 52.3609553943508,
  lng: 4.85309666406198

},
{
  key: 3,
  thumbnail:'img/apartment-01.jpg',
  city: 'Cologne',
  premium:true,
  cost: 20,
  header: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  rating: '4.4',
  photos: ['img/apartment-01.jpg','img/room.jpg'],
  description: 'testdesc',
  bedroomsNum: 1,
  guestNum: 1,
  itemList: [{key:1, item:'Wifi'}, {key:2, item:'Heating'}],
  landLord: {
    userPic: 'img/avatar-max.jpg',
    name: 'John Doe',
    isPro: true,
  },
  reviews: [
    {
    key: 1,
    userPic: 'img/avatar-max.jpg',
    name:'John Doe',
    reviewRating: 5,
    reviewDate: 'April 2019',
    reviewText: 'Testreview'
    }
],
  lat: 52.3909553943508,
  lng: 4.929309666406198
},
{
  key: 4,
  thumbnail:'img/room.jpg',
  city: 'Cologne',
  premium:true,
  cost: 20,
  header: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  rating: '4.4',
  photos: ['img/room.jpg','img/room.jpg'],
  description: 'testdesc',
  bedroomsNum: 1,
  guestNum: 1,
  itemList: [{key:1, item:'Wifi'}, {key:2, item:'Heating'}],
  landLord: {
    userPic: 'img/avatar-max.jpg',
    name: 'John Doe',
    isPro: true,
  },
  reviews: [{
    key:1,
    userPic: 'img/avatar-max.jpg',
    name:'John Doe',
    reviewRating: 5,
    reviewDate: 'April 2019',
    reviewText: 'Testreview'

  }],
  lat: 52.3809553943508,
  lng: 4.939309666406198
}
];
