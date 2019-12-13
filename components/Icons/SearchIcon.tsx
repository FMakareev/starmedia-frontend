import * as React from 'react';

interface ISearchIconProps {
  [prop: string]: any
}

const SearchIcon: React.FC<ISearchIconProps> = ({width = '1em', height = '1em', className}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3996 11.6925C15.4553 8.95072 15.2363 5.04385 12.7427 2.55025C10.009 -0.183418 5.57686 -0.183418 2.84319 2.55025C0.109521 5.28392 0.109521 9.71608 2.84319 12.4497C5.33677 14.9433 9.2436 15.1623 11.9854 13.1067L14.4498 15.5711L15.864 14.1569L13.3996 11.6925ZM11.3285 3.96447C13.2811 5.91709 13.2811 9.08291 11.3285 11.0355C9.37585 12.9882 6.21003 12.9882 4.2574 11.0355C2.30478 9.08291 2.30478 5.91709 4.2574 3.96447C6.21003 2.01184 9.37585 2.01184 11.3285 3.96447Z"
        fill="inherit"/>
    </svg>

  );
};

export default SearchIcon;
