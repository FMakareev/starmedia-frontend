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
  return (
    <div className={'lang-switcher_wrapper'}>
      <div className="lang-switcher_label">
        {i18n.language} <PlusIcon width={'10px'} height={'10px'}/>
      </div>
      <ul className="lang-switcher_list">
        <li
          onClick={() => {
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
            i18n && i18n.changeLanguage('en')
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
            i18n && i18n.changeLanguage('uk')
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
          UK
        </li>
      </ul>
    </div>
  );
};

export default withTranslation()(LangSwitcher);
