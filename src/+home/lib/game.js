import { SquareStatusEnum } from '../fixtures/';

export function getHasWon({ mineMap, newBoard }) {
  for (let i = 0; i < mineMap.length; i++) {
    for (let j = 0; j < mineMap[i].length; j++) {
      if (mineMap[i][j]) continue;
      if (
        newBoard[i][j] === SquareStatusEnum.init ||
        newBoard[i][j] === SquareStatusEnum.flag
      ) return false;
    }
  }

  return true;
}
