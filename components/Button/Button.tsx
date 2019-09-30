import * as React from 'react'
import classNames from 'classnames'
import {ButtonElementEnum} from "../../types/types";
import {createIndentMargin, createIndentPadding} from "../../libs/createIndent";


type Props = {
  as?: string;
  element?: ButtonElementEnum;
  mods?: string[];
  isActive?: boolean;
  [prop: string]: any;
}

const linkModMap: any = {
  l: 'button_link--l',
  m: 'button_link--m',
  s: 'button_link--s',
  xs: 'button_link--xs',
  light: 'button_link--light',
  gray: 'button_link--gray',
  decoration: 'button_link--decoration',
};
const circleModMap: any = {
  l: 'button_circle--l',
  m: 'button_circle--m',
  s: 'button_circle--s',
  xs: 'button_circle--xs',
  xxs: 'button_circle--xxs',
  inverse: 'button_circle--inverse',
  gray: 'button_circle--gray',
};

const transparentModMap: any = {
  dark: 'button_transparent--dark',
};

const otherModMap:any = {
  'icon': 'button--icon',
}


export function getClassListWithButton(props: any): any {
  const classNameList: any = {};

  props.mods && props.mods.forEach((mod: string) => {
    if (otherModMap[mod]) {
      classNameList[otherModMap[mod]] = true;
    }
  });

  switch (props.element) {
    case ButtonElementEnum.link: {
      classNameList['button_link'] = true;
      props.mods && props.mods.forEach((mod: string) => {
        if (linkModMap[mod]) {
          classNameList[linkModMap[mod]] = true;
        }
      });
      break;
    }
    case ButtonElementEnum.circle: {
      classNameList['button_circle'] = true;
      props.mods && props.mods.forEach((mod: string) => {
        if (circleModMap[mod]) {
          classNameList[circleModMap[mod]] = true;
        }
      });
      break;
    }
    case ButtonElementEnum.primary: {
      classNameList['button_primary'] = true;
      break;
    }
    case ButtonElementEnum.tab: {
      classNameList['button_tab'] = true;
      if (props.isActive) {
        classNameList['button_tab--active'] = true;
      }
      break;
    }
    case ButtonElementEnum.transparent: {
      classNameList['button_transparent'] = true;
      props.mods && props.mods.forEach((mod: string) => {
        if (transparentModMap[mod]) {
          classNameList[transparentModMap[mod]] = true;
        }
      });
      break;
    }
  }



  return classNameList;
}


export const Button = ({as = 'button', Component, className, children, href, onClick, ...rest}: Props) => {

  return React.createElement(as, {
    className: classNames('button', className, {
        ...getClassListWithButton(rest),
        ...createIndentMargin(rest),
        ...createIndentPadding(rest),
      }
    ),
    href,
    onClick,
  }, children)

};

Button.defaultProps = {
  element: ButtonElementEnum.link,
  mods: ['s']
}

export default Button;
