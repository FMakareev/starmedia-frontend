import * as React from 'react';
import Text from '../Text/Text';
import Button from '../Button/Button';
import ClearIcon from '../Icons/ClearIcon';
import classNames from 'classnames';
import Cookies from 'js-cookie';

interface ICookiePopupProps {
  [prop: string]: any
}

const CookiePopup: React.FC<ICookiePopupProps> = () => {

  const [isActive, setActive] = React.useState(false);

  React.useEffect(() => {
    if(typeof window !== undefined){
      setActive(!(Cookies.get('cookiePolicy')));
    }
  }, []);


  return (
    <div className={classNames('cookie-popup_wrapper',{
      'cookie-popup_wrapper--active': isActive,
    })}>
      <Text
        font={'root'}
        size={'m'}
        className={'cookie-popup_text'}
      >
        Мы используем cookies, чтобы сделать сайт лучше. <a href="https://ru.wikipedia.org/wiki/Cookie">Что такое
        cookies?</a>
      </Text>
      <Button onClick={()=>{
        setActive(false);
        Cookies.set('cookiePolicy', 'true');
      }}>
        <ClearIcon/>
      </Button>
    </div>
  );
};

export default CookiePopup;
