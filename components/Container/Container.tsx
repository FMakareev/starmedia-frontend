import * as React from 'react';
import classnames from 'classnames';
import {createIndentMargin, createIndentPadding} from "../../libs/createIndent";

interface IContainerProps {
  [prop: string]: any
}

const Container: React.FC<IContainerProps> = ({children, className, as = 'div', ...rest}) => {

  return React.createElement(as, {
    className: classnames('container', className,
      {
        ...createIndentMargin(rest),
        ...createIndentPadding(rest),
      }
    ),
    ...rest,
  }, children);
};

export default Container;
