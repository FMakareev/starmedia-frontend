import * as React from 'react';
import Logo from "../Logo/Logo";

interface IPreloaderProps {
  [prop: string]: any
}

const Preloader: React.FC<IPreloaderProps> = () => {
  return (
    <div className={'preloader_wrapper'}>
      <div className="preloader_icon-wrapper">
        <Logo height={''} width={''} className="preloader_icon"/>
      </div>
    </div>
  );
};

export default Preloader;
