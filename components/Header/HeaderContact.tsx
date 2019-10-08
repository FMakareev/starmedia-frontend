import * as React from 'react';
import Text from "../Text/Text";
import {Address, MainContact, Maybe} from "../../types/types";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {useTranslation} from "react-i18next";

interface IHeaderContactProps {
  contact?: Maybe<MainContact>;

  [prop: string]: any
}

const HeaderContact: React.FC<IHeaderContactProps> = (
  {
    contact,
  }
) => {
  const {i18n} = useTranslation();
  return (
    <React.Fragment>
      <Text font={'object'} size={'m'} className={'mb-60 mt-8 text_uppercase'}>
        {
          contact && contact.emails && contact.emails[0]
        }
      </Text>
      {
        contact && contact.addresses && contact.addresses.map((address: Address, index: number) => (
          <Text key={index} font={'root'} size={'m'} className={'mb-24'}>
            {
              GetLocalizationString(address.addresses, i18n)
            }
          </Text>))
      }
    </React.Fragment>
  );
};

export default HeaderContact;
