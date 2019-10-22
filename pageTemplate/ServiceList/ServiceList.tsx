import * as React from 'react';
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import {useAccordion} from "../../libs/useAccordion";
import {GetServices} from "../../types/types";
import {GetLocalizationString} from '../../libs/GetLocalizationString';
import {useTranslation} from "react-i18next";

interface IServiceListProps extends GetServices {
  [prop: string]: any
}

const ServiceList: React.FC<IServiceListProps> = (
  {
    getServices
  }
) => {
  const {isOpen, toggle} = useAccordion();
  const {i18n} = useTranslation();
  let counter = 0;

  return (
    <ul className="service_list">

      {
        getServices && Object.entries(getServices)
          .filter(([key],) => key !== 'seoTags' && key !== '__typename')
          .map(([key, value], index) => {
            if (!value) {
              return null;
            }
            if(!GetLocalizationString(value && value.name) || !GetLocalizationString(value && value.content)){
              return null;
            }
            if(value.localization && !value.localization.find((item:string)=>item.toLowerCase() === i18n.language)){
              return null;
            }

            counter+=1;
            return (<ServiceItem
              id={key}
              onClick={() => toggle(index)}
              isOpen={isOpen.includes(index)}
              number={`0${counter}`}
              key={index}
              {...value}
              title={GetLocalizationString(value && value.name)}
              content={GetLocalizationString(value && value.content)}
            />)
          })
      }

    </ul>
  );
};

export default ServiceList;
