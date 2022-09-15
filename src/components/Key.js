import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.Component {
  keyPress = (e) => {
    const { keyPress } = this.props;
    keyPress(e.target.textContent);
  }

  render() {
    const { classes, name } = this.props;
    return (
      <button type="button" className={classes} onClick={this.keyPress}>{name}</button>
    );
  }
}

Key.propTypes = {
  keyPress: PropTypes.func.isRequired,
  classes: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Key;
