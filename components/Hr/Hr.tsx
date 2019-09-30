import * as React from 'react';
import classNames from 'classnames';
import {createIndentMargin, createIndentPadding} from "../../libs/createIndent";

interface IHrProps {
  [prop: string]: any
}

const Hr: React.FC<IHrProps> = (props) => {
  return (
    <hr className={classNames({
      ...createIndentMargin(props),
      ...createIndentPadding(props),
    })}/>
  );
};

export default Hr;
