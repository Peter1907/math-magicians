import React from 'react';
import PropTypes from 'prop-types';
import calculate from './logic/calculate';

class Key extends React.Component {
  set = () => {
    const { state, setState, name } = this.props;
    setState(calculate(state, name));
  }
  
  render() {
    const { classes, name } = this.props;
    return (
      <button type="button" className={classes} onClick={this.set}>{name}</button>
    );
  }
}

Key.propTypes = {
  classes: PropTypes.string.isRequired,
  name: PropTypes.string,
  state: PropTypes.object,
  setState: PropTypes.func,
};

export default Key;
