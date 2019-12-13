import * as React from 'react';

interface IPlayIconProps {
  [prop: string]: any
}

const PlayIcon: React.FC<IPlayIconProps> = () => {
  return (
    <svg
      viewBox="0 0 8 11"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 5.5L0.5 10.2631L0.5 0.73686L8 5.5Z"
        fill="inherit"
      />
    </svg>
  );
};

export default PlayIcon;
