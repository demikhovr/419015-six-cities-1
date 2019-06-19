import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {ReviewForm} from './review-form';

configure({adapter: new Adapter()});

const mock = {
  id: 1,
  disabled: true,
  formData: {
    rating: 1,
    comment: ``,
  },
};

it(`ReviewForm correctly renders`, () => {
  const {
    id,
    disabled,
    formData,
  } = mock;
  const onSendForm = jest.fn();
  const onSubmit = jest.fn();
  const onChange = jest.fn();
  const tree = shallow(<ReviewForm
    id={id}
    disabled={disabled}
    formData={formData}
    onSendForm={onSendForm}
    onSubmit={onSubmit}
    onChange={onChange}
  />);

  expect(tree).toMatchSnapshot();
});
