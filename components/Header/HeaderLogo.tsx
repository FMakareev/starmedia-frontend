import * as React from 'react';
import Logo from "../Logo/Logo";
import Link from "next/link";

interface IHeaderLogoProps {
  [prop: string]: any
}

const HeaderLogo: React.FC<IHeaderLogoProps> = () => {
  return (
    <Link href={'/'}>
      <div className="header_logo-wrapper">
        <Logo height={''} width={''}/>
      </div>
    </Link>
  );
};

export default HeaderLogo;
