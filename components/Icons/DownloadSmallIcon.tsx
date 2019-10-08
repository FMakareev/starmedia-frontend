import * as React from 'react';

interface IDownloadSmallIconProps {
    [prop:string]: any
}

const DownloadSmallIcon: React.FC<IDownloadSmallIconProps> = () => {
     return (
       <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
         <path d="M10.8928 5.47186L12.307 6.88608L8.06436 11.1287L3.82175 6.88608L5.23596 5.47186L7.06433 7.30025V0H9.06433V7.30032L10.8928 5.47186Z" fill="white"/>
         <path d="M2 11H0V16H16V11H14V14H2V11Z" fill="inherit"/>
       </svg>
     );
};

export default DownloadSmallIcon;
