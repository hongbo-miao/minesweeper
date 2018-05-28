import { SquareStatusEnum } from '../fixtures/';
import { Configs } from '../../configs';

export function generateMineBoard({ width, height }) {
  let mineMap = [];

  for (let i = 0; i < height; i++) {
    let row = [];

    for (let j = 0; j < width; j++) {
      row = [...row, Math.random() < Configs.mineProbability ? 1 : 0];
    }

    mineMap = [...mineMap, row];
  }

  return mineMap;
}

export function generateSweepBoard({ width, height }) {
  let board = [];

  for (let i = 0; i < height; i++) {
    let row = [];

    for (let j = 0; j < width; j++) {
      row = [...row, SquareStatusEnum.init];
    }

    board = [...board, row];
  }

  return board;
}

export function squareStatus2Icon(squareStatus) {
  switch (squareStatus) {
    case SquareStatusEnum.init: {
      return '';
    }

    case SquareStatusEnum.safe: {
      return '😁';
    }

    case SquareStatusEnum.danger: {
      return '💣';
    }

    case SquareStatusEnum.flag: {
      return '🚩';
    }

    default: {
      return squareStatus;
    }
  }
}
