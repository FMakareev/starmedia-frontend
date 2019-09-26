import * as React from 'react';
import Text from "../Text/Text";

interface IHeaderContactProps {
  [prop: string]: any
}

const HeaderContact: React.FC<IHeaderContactProps> = () => {
  return (
    <React.Fragment>
      <Text font={'object'} size={'m'} className={'mb-60 mt-8 text_uppercase'}>
        office@starmediafilm.com
      </Text>
      <Text font={'root'} size={'m'} className={'mb-24'}>
        Москва, 109382<br/>
        ул. Нижние Поля, д. 31, стр. 1<br/>
        +7 499 356-54-00
      </Text>
      <Text font={'root'} size={'m'}>
        Москва, 127474 <br/>
        Дмитровское шоссе, д. 60, пом. 6<br/>
        +7 499 356-47-00
      </Text>
    </React.Fragment>
  );
};

export default HeaderContact;
