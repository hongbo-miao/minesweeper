import React, { PureComponent } from 'react';
import Loadable from 'react-loadable';

import MyLoading from '../../shared/components/loading.component';

const AsyncMySquare = Loadable({
  loader: () => import('./square.component'),
  loading: MyLoading,
  delay: 300
});

class Board extends PureComponent {
  renderRow = (row, x) => {
    const {
      gameStatus,
      selectSquare
    } = this.props;

    return row.map((squareStatus, y) => {
      return (
        <div key={y}>
          <AsyncMySquare
            gameStatus={gameStatus}
            squareStatus={squareStatus}
            x={x}
            y={y}

            selectSquare={selectSquare}
          />
        </div>
      );
    });
  };

  renderRows() {
    const { board } = this.props;

    return board.map((row, x) => {
      return (
        <div key={x} className="my-row">
          {this.renderRow(row, x)}
        </div>
      )
    });
  }

  render() {
    return (
      <div className="my-board">
        {this.renderRows()}
      </div>
    )
  }
}

export default Board;
