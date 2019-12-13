import * as React from 'react';
import DefaultLink, { LinkProps } from "next/link";
import { getClassListWithButton } from '../Button/Button';
import classNames from "classnames";

interface ILinkProps extends LinkProps{
  [prop: string]: any
}

const Link: React.FC<ILinkProps> = ({children, className, ...rest}) => {

  return (
    // @ts-ignore
    <DefaultLink className={classNames('button', className, {
        ...getClassListWithButton(rest),
      }
    )} {...rest}>
      {children}
    </DefaultLink>
  );
};

export default Link;
