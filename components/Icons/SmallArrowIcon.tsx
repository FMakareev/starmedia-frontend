import * as React from 'react';

interface ISmallArrowIconProps {
  [prop: string]: any
}

const SmallArrowIcon: React.FC<ISmallArrowIconProps> = () => {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="inherit" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.41421 2.92893L0 4.34314L3.65686 7.99999L7.31371 4.34314L5.8995 2.92893L3.65685 5.17157L1.41421 2.92893Z"
        fill="inherit"
      />
    </svg>
  );
};

export default SmallArrowIcon;
