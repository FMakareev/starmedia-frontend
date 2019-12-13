import * as React from 'react';

interface IMailSmallIconProps {
  [prop: string]: any
}

const MailSmallIcon: React.FC<IMailSmallIconProps> = () => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0V12H0V0H16ZM11.8795 2H4.12041L7.99994 4.77109L11.8795 2ZM2 2.94323L2 10H14L14 2.94314L7.99994 7.2289L2 2.94323Z"
        fill="inherit"
      />
    </svg>
  );
};

export default MailSmallIcon;
