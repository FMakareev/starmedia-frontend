import * as React from 'react';

interface IBackIconProps {
  [prop: string]: any
}

const BackIcon: React.FC<IBackIconProps> = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11.5" cy="12.5" r="10.5" fill="#F0F0F0"/>
      <path
        d="M13.0711 10.4142L11.6569 9L8.00001 12.6569L11.6569 16.3137L13.0711 14.8995L10.8284 12.6569L13.0711 10.4142Z"
        fill="inherit"
      />
    </svg>
  );
};

export default BackIcon;
