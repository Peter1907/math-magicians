/* eslint-disable*/

import renderer from 'react-test-renderer';
import Key from '../components/Key';

it('renders correctly', () => {
  const state = {
    total: null,
    next: null,
    operation: null,
  }
  const setState = () => {
    state = {
      total: this.props.name,
      next: null,
      operation: null,
    }
  }
  const tree = renderer
    .create(<Key classes="key" name="7" state={state} setState={setState} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
