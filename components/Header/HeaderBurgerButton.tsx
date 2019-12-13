import * as React from 'react';
import classNames from "classnames";

interface IHeaderBurgerButtonProps {
  [prop: string]: any
}

const HeaderBurgerButton: React.FC<IHeaderBurgerButtonProps> = ({isActive,
                                                                  toggleMenu}) => {
  return (
    <button aria-label={'menu burger'} className={classNames('header_burger',{
      'open': isActive,
    })} onClick={toggleMenu}>
      <span/>
      <span/>
    </button>
  );
};

export default HeaderBurgerButton;
