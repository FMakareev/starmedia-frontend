import * as React from 'react';
import {Fragment} from 'react';
import Button from "../../components/Button/Button";
import {ButtonElementEnum} from "../../types/types";

interface IContactListStringsProps {
  contacts?: string[];

  [prop: string]: any
}

const ContactListStrings: React.FC<IContactListStringsProps> = (
  {
    contacts,
    typeHref,
  }: any
) => <Fragment>
  {
    contacts && contacts.map((contact: string, index: number) => {
      return (<Button
        style={{
          fontWeight: 'normal',
          textTransform: 'inherit'
        }}
        as={'a'}
        mods={['m']}
        className={'text_font-root'}
        element={ButtonElementEnum.link}
        href={`${typeHref}${contact}`}
        key={index}
      >
              {contact}
      </Button>)
    })
  }
</Fragment>;

export default ContactListStrings;
