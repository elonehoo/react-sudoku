import React from 'react';
import { useSudokuContext } from '../context/SudokuContext';

type NumbersProps = {
  onClickNumber: (number: string) => void
};

/**
 * 状态部分中数字选择器的组件。
 */
export const Numbers = ({ onClickNumber } : NumbersProps) => {
  let { numberSelected } = useSudokuContext();

  return (
    <div className="status__numbers">
      {
        [1,2,3,4,5,6,7,8,9].map((number) => {
          if (numberSelected === number.toString()) {
            return (
              <div className="status__number status__number--selected" key={number} onClick={() => onClickNumber(number.toString())}>{number}</div>
            )
          } else {
            return (
              <div className="status__number" key={number} onClick={() => onClickNumber(number.toString())}>{number}</div>
            )
          }
        })
      }
    </div>
  )
}
