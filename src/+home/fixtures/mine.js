import { getHasWon } from '../lib/';

export const SquareStatusEnum = Object.freeze({
  init: -3,
  danger: -2,
  flag: -1,
  safe: 0
});

export function getSquareStatus({ x, y, isRightClick, board, mineMap }) {
  if (isRightClick) {
    if (board[x][y] === SquareStatusEnum.init) return SquareStatusEnum.flag;
    if (board[x][y] === SquareStatusEnum.flag) return SquareStatusEnum.init;
  }

  if (mineMap[x][y]) return SquareStatusEnum.danger;

  let mineCount = 0;

  for (let i = x - 1; i <= x + 1; i++) {
    if (mineMap[i] === undefined) continue;

    for (let j = y - 1; j <= y + 1; j++) {
      if (mineMap[i][j] === undefined) continue;

      if (mineMap[i][j]) mineCount++;
    }
  }

  return mineCount;
}

export function getEntities({ x, y, isRightClick, board, mineMap }) {
  let row = board.slice(x, x + 1)[0];

  const squareStatus = getSquareStatus({ x, y, isRightClick, board, mineMap });
  row[y] = squareStatus;

  const newBoard = [
    ...board.slice(0, x),
    row,
    ...board.slice(x + 1)
  ];

  return {
    hadDead: squareStatus === SquareStatusEnum.danger,
    hasWon: getHasWon({ mineMap, newBoard }),
    newBoard,
    squareStatus
  }
}
