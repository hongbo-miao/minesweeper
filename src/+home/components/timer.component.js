import React, { PureComponent } from 'react';
import { Line } from 'rc-progress';

import { Configs } from '../../configs';
import { getColor } from '../lib/';

class Timer extends PureComponent {
  render() {
    const { timer } = this.props;
    const percentage = timer / Configs.countdown;
    const color = getColor(percentage);

    return (
      <div className="my-progress">
        <Line
          strokeWidth="2"
          trailWidth="2"
          strokeColor={color}
          percent={percentage * 100}
        />
      </div>
    );
  }
}

export default Timer;
