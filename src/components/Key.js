import React from 'react';

class Key extends React.Component {
  constructor(props) {
    super(props);
  }

  keyPress = (e) => {
    this.props.keyPress(e.target.textContent);
  }

  render() {
    return (
      <button type="button" className={this.props.class} onClick={this.keyPress}>{this.props.name}</button>
    )
  }
}

export default Key;