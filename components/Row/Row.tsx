import * as React from 'react';
import classnames from 'classnames';
import {ViewportSizeEnum} from 'types/types';
import {createIndentPadding, createIndentMargin} from "../../libs/createIndent";

export const rowKeys = [
  'start',
  'center',
  'end',
  'top',
  'middle',
  'bottom',
  'around',
  'between',
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'nowrap',
];


interface IRowProps {
  reverse?: boolean;
  start?: ViewportSizeEnum,
  center?: ViewportSizeEnum,
  end?: ViewportSizeEnum,
  top?: ViewportSizeEnum,
  middle?: ViewportSizeEnum,
  bottom?: ViewportSizeEnum,
  around?: ViewportSizeEnum,
  between?: ViewportSizeEnum,

  [prop: string]: any
}

function getRowClassNames(props: any): any {
  const modificators: any = {};
  for (let i = 0; i < rowKeys.length; ++i) {
    const key = rowKeys[i];
    const value = props[key];
    if (value) {
      if (Array.isArray(value)) {
        value.forEach((item: string) => {
          modificators[`${key}-${item}`] = true;
        })
      } else {
        modificators[`${key}-${value}`] = true;
      }
    }
  }
  return modificators;
}

const Row: React.FC<IRowProps> = ({
                                    children,
                                    reverse,
                                    className,
                                    ...rest
                                  }) => {
  return (
    <div className={classnames('row', className, {
      'reverse': reverse,
      ...getRowClassNames(rest),
      ...createIndentMargin(rest),
      ...createIndentPadding(rest),
    })}>
      {children}
    </div>
  );
};

export default Row;
