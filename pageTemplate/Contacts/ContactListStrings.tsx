import * as React from 'react';
import {Fragment} from "react";

interface IContactListStringsProps {
  contacts?: string[];

  [prop: string]: any
}

const ContactListStrings: React.FC<IContactListStringsProps> = (
  {
    contacts,
  }: any
) => <Fragment>
  {
    contacts && contacts.map((contact: string, index: number) => {
      return (<span key={index}>
              {contact}{contacts && index < contacts.length - 1 ? ', ' : ''}
      </span>)
    })
  }
</Fragment>;

export default ContactListStrings;
