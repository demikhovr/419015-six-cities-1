import ActionCreator from '../action-creator/action-creator';
import {adaptOfferData} from '../util';

export default {
  loadOffers: () => (dispatch, _getState, api) => api.get(`/hotels`)
    .then((response) => {
      const data = response.data.map(adaptOfferData);
      const city = data[0].city;
      dispatch(ActionCreator.changeCity(city));
      dispatch(ActionCreator.loadOffers(data));
    })
};