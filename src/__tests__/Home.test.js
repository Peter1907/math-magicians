/* eslint-disable*/ 
import renderer from 'react-test-renderer';
import Home from '../pages/Home';


describe('Test components', () => {
it('Home test', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});