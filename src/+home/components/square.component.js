import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { GameStatusEnum, SquareStatusEnum } from '../fixtures/';
import { squareStatus2Icon } from '../lib/';

class Posts extends PureComponent {
  onSelectSquare = ({ isRightClick }) => {
    const {
      gameStatus, squareStatus, x, y,
      selectSquare
    } = this.props;

    if (gameStatus !== GameStatusEnum.gaming) return;
    if (squareStatus !== SquareStatusEnum.init && squareStatus !== SquareStatusEnum.flag) return;

    selectSquare({ x, y, isRightClick });
  };

  onLeftClickSquare = () => {
    this.onSelectSquare({ isRightClick: false });
  };

  onRightClickSquare = event => {
    event.preventDefault();
    this.onSelectSquare({ isRightClick: true });
  };

  render() {
    const { gameStatus, squareStatus } = this.props;

    const squareClassName = classNames('my-square', { 'my-alive': gameStatus === GameStatusEnum.gaming });

    return (
      <div className={squareClassName} onClick={this.onLeftClickSquare} onContextMenu={this.onRightClickSquare}>
        {squareStatus2Icon(squareStatus)}
      </div>
    );
  }
}

export default Posts;
