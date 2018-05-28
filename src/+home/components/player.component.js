import React, { PureComponent } from 'react';

class Player extends PureComponent {
  render() {
    const { player } = this.props;

    return (
      <div>Player {player}</div>
    );
  }
}

export default Player;
