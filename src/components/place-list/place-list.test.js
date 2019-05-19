import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from './place-list.jsx';

const mock = {
  offers: [
    {
      id: 1,
      mark: `Premium`,
      imageSrc: `img/apartment-01.jpg`,
      price: 120,
      inBookmarks: true,
      rating: 4,
      title: `Beautiful luxurious apartment at great location`,
      type: `Apartment`,
    },
    {
      id: 2,
      imageSrc: `img/room.jpg`,
      price: 80,
      inBookmarks: false,
      rating: 4.5,
      title: `Wood and stone place`,
      type: `Private room`,
    },
    {
      id: 3,
      imageSrc: `img/apartment-02.jpg`,
      price: 132,
      inBookmarks: true,
      rating: 2.3,
      title: `Canal View Prinsengracht`,
      type: `Apartment`,
    },
    {
      id: 4,
      mark: `Premium`,
      imageSrc: `img/apartment-03.jpg`,
      price: 180,
      inBookmarks: false,
      rating: 3.1,
      title: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
    },
  ],
};

it(`PlaceList correctly renders`, () => {
  const {offers} = mock;
  const tree = renderer
    .create(<PlaceList offers={offers} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});