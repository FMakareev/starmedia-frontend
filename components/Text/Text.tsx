import * as React from 'react';
import classNames from 'classnames';
import {createIndentMargin, createIndentPadding} from "../../libs/createIndent";

interface ITextProps {
  size?: string;
  font?: string;
  type?: string;
  align?: string;

  [prop: string]: any
}


const getTextSize = (size?: string) => {

  const TextSizeMap: any = {
    xl: 'text_size-xl',
    l: 'text_size-l',
    m: 'text_size-m',
    s: 'text_size-s',
    xs: 'text_size-xs',
  };
  if (size && TextSizeMap[size]) {
    return {
      [TextSizeMap[size]]: true
    };
  }
  return {};
};

const getTextFont = (font?: string) => {
  const TextFontMap: any = {
    object: 'text_font-object',
    root: 'text_font-root',
  };
  if (font && TextFontMap[font]) {
    return {
      [TextFontMap[font]]: true,
    }
  }
  return {};
};

const getTextColor = (type?: string) => {
  const TextColorMap: any = {
    primary: 'text_primary',
    secondary: 'text_secondary',
    placeholder: 'text_placeholder',
    inherit: 'text_inherit',
  };

  if (type && TextColorMap[type]) {
    return {
      [TextColorMap[type]]: true,
    }
  }
  return {};
};


const Text: React.FC<ITextProps> = ({as = 'div', className, font, size, type, children, ...rest}) => {
  return React.createElement(as, {
    className: classNames('text',
      className,
      {
        ...getTextFont(font),
        ...getTextSize(size),
        ...getTextColor(type),
        ...createIndentMargin(rest),
        ...createIndentPadding(rest),
      }
    ),
    ...rest,
  }, children);
};

Text.defaultProps = {
  type: 'primary',
  size: 's',
  font: 'object',
}

export default Text;
