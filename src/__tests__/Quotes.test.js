/* eslint-disable*/ 

import renderer from 'react-test-renderer';
import Quote from '../pages/Quotes';

describe ('Test components', () => {
    it('Quote test', () => {
        const tree = renderer.create(<Quote />).toJSON();
        expect(tree).toMatchSnapshot();
      })


});
