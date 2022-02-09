import React from 'react';

type HeaderProps = {
  onClick: () => void
};

/**
 * 标题部分的组件。
 */
export const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <h1>
        Su<span className="header__group-one">do</span><span className="header__group-two">ku</span>
      </h1>
      <h2 onClick={props.onClick}>
        New Game
      </h2>
    </header>
  )
}
