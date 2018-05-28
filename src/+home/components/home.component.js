import React, { PureComponent } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';

import {
  changeWidth,
  changeHeight,
  changePlayerNumber,
  resetGame,
  selectSquare
} from '../actions/';
import {
  getHeight,
  getWidth,
  getPlayerNumber
} from '../selectors/';
import MyLoading from '../../shared/components/loading.component';

const AsyncMyBoard = Loadable({
  loader: () => import('./board.component'),
  loading: MyLoading,
  delay: 300
});
const AsyncMyGameStatus = Loadable({
  loader: () => import('./game-status.component'),
  loading: MyLoading,
  delay: 300
});
const AsyncMyRestart = Loadable({
  loader: () => import('./restart.component'),
  loading: MyLoading,
  delay: 300
});
const AsyncMyPlayer = Loadable({
  loader: () => import('./player.component'),
  loading: MyLoading,
  delay: 300
});
const AsyncMySettings = Loadable({
  loader: () => import('./settings.component'),
  loading: MyLoading,
  delay: 300
});
const AsyncMyTimer = Loadable({
  loader: () => import('./timer.component'),
  loading: MyLoading,
  delay: 300
});

class Home extends PureComponent {
  render() {
    const {
      board,
      gameStatus,
      player,
      height,
      width,
      playerNumber,
      timer,

      changeWidth,
      changeHeight,
      changePlayerNumber,
      resetGame,
      selectSquare
    } = this.props;

    return (
      <div className="my-home">
        <div className="my-header">
          <div className="my-restart">
            <AsyncMyRestart
              resetGame={resetGame}
            />
          </div>

          <div className="my-title">
            {playerNumber > 1 &&
            <div className="my-player">
              <AsyncMyPlayer
                player={player}
              />
            </div>}

            <div className="my-game-status">
              <AsyncMyGameStatus
                gameStatus={gameStatus}
              />
            </div>
          </div>

          <div className="my-settings">
            <AsyncMySettings
              initialValues={{ width, height, playerNumber }}
              // height={height}
              // width={width}
              // playerNumber={playerNumber}

              changeWidth={changeWidth}
              changeHeight={changeHeight}
              changePlayerNumber={changePlayerNumber}
            />
          </div>
        </div>

        <div className="my-timer">
          <AsyncMyTimer
            timer={timer}
          />
        </div>

        <div className="my-board-wrapper">
          <AsyncMyBoard
            gameStatus={gameStatus}
            board={board}

            selectSquare={selectSquare}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    board: state.board,
    gameStatus: state.gameStatus,
    height: getHeight(state),
    width: getWidth(state),
    mineMap: state.mineMap,
    player: state.player,
    playerNumber: getPlayerNumber(state),
    timer: state.timer
  }), {
    changeWidth,
    changeHeight,
    changePlayerNumber,
    resetGame,
    selectSquare
  }
)(Home);
