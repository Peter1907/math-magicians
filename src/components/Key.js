import React from 'react';

class Key extends React.Component {
  keyPress = (e) => {
    const { keyPress } = this.props;
    keyPress(e.target.textContent);
  }

  render() {
    const { classes, name } = this.props;
    return (
      <button type="button" className={classes} onClick={this.keyPress}>{name}</button>
    )
  }
}

export default Key;