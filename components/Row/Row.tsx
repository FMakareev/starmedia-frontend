import * as React from 'react';
import classnames from 'classnames';
import { ViewportSizeEnum } from 'types/types';

export const rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];




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
      modificators[`${key}-${value}`] = true;
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
    })}>
      {children}
    </div>
  );
};

export default Row;
