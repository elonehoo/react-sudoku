import React from 'react';
import { Game } from './Game';
import './App.css';
import { SudokuProvider } from './context/SudokuContext';

/**
 * 根组件
 */
export const App: React.FC<{}> = () => {
  return (
    <SudokuProvider>
      <Game />
    </SudokuProvider>
  );
}
