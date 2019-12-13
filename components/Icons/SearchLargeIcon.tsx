import * as React from 'react';

interface ISearchLargeIconProps {
  [prop: string]: any
}

const SearchLargeIcon: React.FC<ISearchLargeIconProps> = () => {
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.3059 25.2232C31.8863 19.398 31.8104 10.1515 26.0783 4.41929C20.2692 -1.38976 10.8509 -1.38976 5.04184 4.41929C-0.767204 10.2283 -0.767203 19.6467 5.04185 25.4557C10.451 30.8648 18.9895 31.2372 24.8296 26.5729L29.7057 32.0887L31.2041 30.764L26.3059 25.2232ZM24.6641 5.8335C29.6921 10.8615 29.6921 19.0135 24.6641 24.0415C19.6361 29.0695 11.4841 29.0695 6.45606 24.0415C1.42806 19.0135 1.42806 10.8615 6.45606 5.8335C11.4841 0.805501 19.6361 0.8055 24.6641 5.8335Z"
        fill="#202020"
      />
    </svg>

  );
};

export default SearchLargeIcon;
