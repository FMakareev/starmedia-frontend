import * as React from 'react';
import PlusIcon from "../Icons/PlusIcon";
import {withTranslation} from "../../libs/i18n";
import classNames from 'classnames';

interface ILangSwitcherProps {
  [prop: string]: any
}

const LangSwitcher: React.FC<ILangSwitcherProps> = (
  {
    i18n
  },
) => {
  React.useEffect(() =>
    {
        function getCookie(name: String) {
          const value = `; ${document.cookie}`;
          const parts = value.split(`; ${name}=`);
          //@ts-ignore
          if (parts.length === 2) return parts.pop().split(';').shift() || null;
        }
        const forceLangSet = getCookie("forceLang") || null;
        const ipLangSet = getCookie("ipLang") || null;
        debugger;
        if (!forceLangSet && !ipLangSet) {
          debugger;
          fetch("https://api.2ip.ua/geo.json?ip=")
            .then(data => {return data.json()})
            .then(resp => {
              const response = resp;
              console.log(response);
              const countryCode = response.country_code || "EN";
              document.cookie = `ipLang=${countryCode}`;
              switch (countryCode) {
                case "RU":
                  i18n && i18n.changeLanguage('ru');
                  break;
                case "UA":
                  i18n && i18n.changeLanguage('uk');
                  break;
                default:
                  i18n && i18n.changeLanguage('en');
                  break;
              }
            });
        }
  },
    [])
  return (
    <div className={'lang-switcher_wrapper'}>
      <div className="lang-switcher_label">
        {i18n.language} <PlusIcon width={'10px'} height={'10px'}/>
      </div>
      <ul className="lang-switcher_list">
        <li
          onClick={() => {
            document.cookie = "forceLang=ru";
            i18n && i18n.changeLanguage('ru');
          }}
          className={classNames("lang-switcher_item", {
            'lang-switcher_item--active': i18n.language === 'ru',
          })}>
          <div
            className="lang-switcher_icon-wrapper"
          >
            <img
              className="lang-switcher_icon"
              src={require('../../static/images/ru-flag.jpg')}
              alt=""
            />
          </div>
          RU
        </li>
        <li
          onClick={() => {
            document.cookie = "forceLang=en";
            i18n && i18n.changeLanguage('en');
          }} className={classNames("lang-switcher_item", {
          'lang-switcher_item--active': i18n.language === 'en',
        })}>
          <div
            className="lang-switcher_icon-wrapper"
          >
            <img
              className="lang-switcher_icon"
              src={require('../../static/images/en-flag.jpg')}
              alt=""
            />
          </div>
          EN
        </li>
        <li
          onClick={() => {
            document.cookie = "forceLang=uk";
            i18n && i18n.changeLanguage('uk');
          }}
          className={classNames("lang-switcher_item", {
            'lang-switcher_item--active': i18n.language === 'uk',
          })}>
          <div
            className="lang-switcher_icon-wrapper"
          >
            <img
              className="lang-switcher_icon"
              src={require('../../static/images/ua-flag.jpg')}
              alt=""
            />
          </div>
          UA
        </li>
      </ul>
    </div>
  );
};

export default withTranslation()(LangSwitcher);
