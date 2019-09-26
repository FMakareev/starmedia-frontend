import * as React from 'react';
import classnames from 'classnames';
import {createIndentMargin, createIndentPadding} from "../../libs/createIndent";

interface IContainerProps {
  [prop: string]: any
}

const Container: React.FC<IContainerProps> = ({children, className, ...rest}) => {
  return (
    <div className={classnames('container', className,
      {
        ...createIndentMargin(rest),
        ...createIndentPadding(rest),
      }
    )}>
      {children}
    </div>
  );
};

export default Container;
