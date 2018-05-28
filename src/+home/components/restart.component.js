import React, { PureComponent } from 'react';

class Restart extends PureComponent {
  render() {
    const { resetGame } = this.props;

    return (
      <button className="my-restart-button" onClick={resetGame}>
        Restart
      </button>
    );
  }
}

export default Restart;
