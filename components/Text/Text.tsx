import * as React from 'react';

interface ITextProps {
  size?: string;
  font?: string;
  type?: string;
  align?: string;

  [prop: string]: any
}

const Text: React.FC<ITextProps> = ({as = 'div', size, children, ...rest}) => {
  return React.createElement(as, rest, children);
};

export default Text;
