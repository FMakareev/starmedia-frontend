import * as React from 'react';
import PlusIcon from "../Icons/PlusIcon";

interface ILangSwitcherProps {
  [prop: string]: any
}

const LangSwitcher: React.FC<ILangSwitcherProps> = () => {
  return (
    <div className={'lang-switcher_wrapper'}>
      <div className="lang-switcher_label">
        RU <PlusIcon width={'10px'} height={'10px'} />
      </div>
      <ul className="lang-switcher_list">
        <li className="lang-switcher_item lang-switcher_item--active">
          <div className="lang-switcher_icon-wrapper">
            <img
              className="lang-switcher_icon"
              src={require('../../static/images/ru-flag.jpg')}
              alt=""
            />
          </div>
          RU
        </li>
        <li className="lang-switcher_item">
          <div className="lang-switcher_icon-wrapper">
            <img
              className="lang-switcher_icon"
              src={require('../../static/images/en-flag.jpg')}
              alt=""
            />
          </div>
          EN
        </li>
        <li className="lang-switcher_item">
          <div className="lang-switcher_icon-wrapper">
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

export default LangSwitcher;
