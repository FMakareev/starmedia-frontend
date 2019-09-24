import * as React from 'react';
import classnames from 'classnames';

interface IContainerProps {
  [prop: string]: any
}

const Container: React.FC<IContainerProps> = ({children, className}) => {
  return (
    <div className={classnames('container', className)}>
      {children}
    </div>
  );
};

export default Container;
