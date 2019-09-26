import * as React from 'react';

interface IPlusIconProps {
  width: string;
  height: string;
  [prop: string]: any
}

const PlusIcon: React.FC<IPlusIconProps> = ({
                                              width,
                                              height
                                            }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6V10H6V6L10 6V4L6 4V0H4V4L0 4V6L4 6Z"
        fill="inherit"
      />
    </svg>
  );
};

export default PlusIcon;
