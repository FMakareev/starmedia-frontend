import * as React from 'react'
import classNames from 'classnames'
import {ButtonElementEnum} from "../../types/types";


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
  light: 'button_link--light',
};
const circleModMap: any = {
  m: 'button_link--m',
  s: 'button_link--s',
};


function getClassNameList(props: any): any {
  const classNameList: any = {};

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
      if (props.isActive) {
        classNameList['button_tab--active'] = true;
      }
      break;
    }
  }

  return classNameList;
}


export const Button = ({as = 'button', className, children, href, onClick, ...rest}: Props) => {

  return React.createElement(as, {
    className: classNames('button', className, {
        ...getClassNameList(rest),
      }
    ),
    href,
    onClick,
  }, children)

};

export default Button;
