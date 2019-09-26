import * as React from 'react';
import classnames from 'classnames';
import {ViewportSizeEnum} from 'types/types';
import {
  createIndentMargin,
  createIndentPadding
} from "../../libs/createIndent";

interface IColProps {
  first?: ViewportSizeEnum,
  last?: ViewportSizeEnum,

  xsOffset?: number,
  smOffset?: number,
  mdOffset?: number,
  lgOffset?: number,
  xlOffset?: number,

  xs?: number | string,
  sm?: number | string,
  md?: number | string,
  lg?: number | string,
  xl?: number | string,

  [prop: string]: any
}

const classMap: any = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset',
  xlOffset: 'col-xl-offset'
};

function getColClassNames(props: any): any {
  const extraClasses: any = {};

  if (props.first) {
    extraClasses[`first-${props.first}`] = true
  }
  if (props.last) {
    extraClasses[`last-${props.last}`] = true
  }
  Object.keys(props)
    .filter((key: string) => classMap[key])
    .forEach((key: string) => {
      extraClasses[classMap[key] + '-' + props[key]] = true;
    });

  return extraClasses;
}


const Col: React.FC<IColProps> = ({children, className,style, ...rest}) => {
  return (
    <div
      style={style}
      className={classnames('col', className, {
        ...getColClassNames(rest),
        ...createIndentMargin(rest),
        ...createIndentPadding(rest),
      })}
    >
      {children}
    </div>
  );
};

export default Col;
