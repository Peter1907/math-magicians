import React from 'react';
import { ReactPropTypes } from 'react';

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
  keyPress: ReactPropTypes.func.isRequired,
  classes: ReactPropTypes.string.isRequired,
  name: ReactPropTypes.string,
}

export default Key;
