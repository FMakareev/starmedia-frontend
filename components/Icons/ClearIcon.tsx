import * as React from 'react';

interface IClearIconProps {
  [prop: string]: any
}

const ClearIcon: React.FC<IClearIconProps> = ({fill = 'inherit'}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.43504 7.84923L0 14.2843L1.41421 15.6985L7.84926 9.26344L14.2843 15.6985L15.6985 14.2843L9.26347 7.84923L15.6985 1.41421L14.2843 0L7.84926 6.43501L1.41424 4.29153e-06L2.86102e-05 1.41422L6.43504 7.84923Z"
        fill={fill}
      />
    </svg>

  );
};

export default ClearIcon;
