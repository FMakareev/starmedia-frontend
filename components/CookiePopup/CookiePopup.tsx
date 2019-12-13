import * as React from 'react';
import Text from '../Text/Text';
import Button from '../Button/Button';
import ClearIcon from '../Icons/ClearIcon';
import classNames from 'classnames';
import Cookies from 'js-cookie';
import {useLocalizationQuery} from "../../libs/useLocalizationQuery";
import {
  GetCookieAccessRUQuery,
  GetCookieAccessENQuery,
  GetCookieAccessUKQuery
} from '../../apollo/query/GetCookieAccess';
import ReactHtmlParser from "react-html-parser";
import {GetLocalizationString} from "../../libs/GetLocalizationString";

interface ICookiePopupProps {
  [prop: string]: any
}

const CookiePopup: React.FC<ICookiePopupProps> = () => {

  const [isActive, setActive] = React.useState(false);

  const {data} = useLocalizationQuery({
    ru: GetCookieAccessRUQuery,
    en: GetCookieAccessENQuery,
    uk: GetCookieAccessUKQuery,
  });

  React.useEffect(() => {
    if (typeof window !== undefined) {
      setActive(!(Cookies.get('cookiePolicy')));
    }
  }, []);


  return (
    <div className={classNames('cookie-popup_wrapper', {
      'cookie-popup_wrapper--active': isActive,
    })}>
      <Text
        font={'root'}
        size={'m'}
        className={'cookie-popup_text reset-style'}
      >
        {
          ReactHtmlParser(
            GetLocalizationString(data
              && data.getCookieAccess
              && data.getCookieAccess.description)
          )
        }
      </Text>
      <Button
        aria-label={'I confirm the use of cookies'}
        onClick={() => {
          setActive(false);
          Cookies.set('cookiePolicy', 'true');
        }}>
        <ClearIcon/>
      </Button>
    </div>
  );
};

export default CookiePopup;
