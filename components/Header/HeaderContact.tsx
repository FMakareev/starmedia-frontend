import * as React from 'react';
import Text from "../Text/Text";
import {Address, MainContact, Maybe} from "../../types/types";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {useTranslation} from "react-i18next";
import ReactHtmlParser from "react-html-parser";

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


const email = contact && contact.addresses && contact.addresses[0].email;

  return (
    <React.Fragment>
      <Text
        style={{display:'block'}}
        as={'a'}
        href={`mailto:${email}`} font={'object'} size={'m'}
        className={'mb-60 mt-8 text_uppercase'}>
        {
          email
        }
      </Text>
      {
        contact && contact.addresses && contact.addresses.map((address: Address, index: number) => (
          <Text key={index} font={'root'} size={'m'} className={'mb-24'}>
            {
              GetLocalizationString(contact.name, i18n)
            }, {address.index}<br/>
            <div className={'reset-style'}>
              {
                ReactHtmlParser( GetLocalizationString(address.addresses, i18n))
              }
            </div>
            {
             address.phone
            }
            <br/><br/>
          </Text>))
      }
    </React.Fragment>
  );
};

export default HeaderContact;
