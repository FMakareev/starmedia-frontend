import * as React from 'react';

interface IExternalLinkProps {
  [prop: string]: any
}

const ExternalLink: React.FC<IExternalLinkProps> = ({style, className}) => {
  return (
    <svg style={style} className={className} width="15" height="15" viewBox="0 0 15 15" fill="inherit"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0V2H11.5244L6 7.2809L7.49905 8.71387L13 3.4554V5H15V0H10Z" fill="inherit"/>
      <path
        d="M2 1C0.895416 1 0 1.89543 0 3V13C0 14.1046 0.895416 15 2 15H12C13.1046 15 14 14.1046 14 13V8H12V13H2V3H7V1H2Z"
        fill="inherit"/>
    </svg>
  );
};

export default ExternalLink;
