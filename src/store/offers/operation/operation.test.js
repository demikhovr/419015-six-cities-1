import MockAdapter from 'axios-mock-adapter';

import {createAPI} from '../../../api';
import Operation from './operation';
import {LOAD_OFFERS} from '../action-types';
import {CHANGE_CITY} from '../../city/action-types';
import {adaptOfferData} from '../../offers/util';

const mock = {
  offer: {
    "bedrooms": 1,
    "city": {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    "description": `Description`,
    "goods": [`Washer`, `Towels`],
    "host": {
      "avatar_url": `img/avatar-angelina.jpg`,
      "id": 25,
      "is_pro": true,
      "name": `Name`,
    },
    "id": 1,
    "images": [`https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`],
    "is_favorite": true,
    "is_premium": false,
    "location": {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
    "max_adults": 3,
    "preview_image": `https://es31-server.appspot.com/six-cities/static/hotel/4.jpg`,
    "price": 117,
    "rating": 3.4,
    "title": `The house among olive`,
    "type": `room`,
  },
};

it(`Should make a correct API call to /hotels`, () => {
  const {offer} = mock;
  const adaptedOffer = adaptOfferData(offer);
  const SUCCESS_STATUS = 200;
  const OFFERS_URL = `/hotels`;
  const dispatch = jest.fn();
  const _getState = jest.fn();
  const onSuccess = jest.fn();
  const api = createAPI(() => jest.fn());
  const apiMock = new MockAdapter(api);
  const loadOffers = Operation.loadOffers(onSuccess);
  const data = [offer];

  apiMock
    .onGet(OFFERS_URL)
    .reply(SUCCESS_STATUS, data);

  return loadOffers(dispatch, _getState, api)
    .then(() => {
      const {city} = [adaptedOffer][0];

      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: CHANGE_CITY,
        payload: city,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: LOAD_OFFERS,
        payload: [adaptedOffer],
      });
    });
});
