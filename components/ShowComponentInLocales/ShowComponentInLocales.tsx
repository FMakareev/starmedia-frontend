import * as React from 'react';
import {useTranslation} from "react-i18next";

interface IShowComponentInLocalesProps {
  locales: string[];

  [prop: string]: any
}

const ShowComponentInLocales: React.FC<IShowComponentInLocalesProps> = (
  {
    locales,
    children
  }
) => {
  const {i18n} = useTranslation();
  if (locales.findIndex((local) => i18n.language === local) >= 0) {
    return <React.Fragment>{children}</React.Fragment>
  }
  return null;
};

export default ShowComponentInLocales;
