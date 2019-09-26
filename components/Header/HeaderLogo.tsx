import * as React from 'react';
import Logo from "../Logo/Logo";

interface IHeaderLogoProps {
    [prop:string]: any
}

const HeaderLogo: React.FC<IHeaderLogoProps> = () => {
     return (
       <div className="header_logo-wrapper">
         <Logo height={''} width={''}/>
       </div>
       );
};

export default HeaderLogo;
