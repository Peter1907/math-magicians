/* eslint-disable*/

import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

// This file is testing both of the Calculator and the Key components,
// because the Calculator is depending on the Key component to work properly.
it('renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});