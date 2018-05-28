import React, { PureComponent } from 'react';

import { GameStatusEnum } from '../fixtures/';

class GameStatus extends PureComponent {
  render() {
    const { gameStatus } = this.props;

    if (gameStatus === GameStatusEnum.dead) return <div>lose...</div>;
    if (gameStatus === GameStatusEnum.won) return <div>won!</div>;

    return null;
  }
}

export default GameStatus;
