import * as React from 'react';
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import {useAccordion} from "../../libs/useAccordion";
import {GetServices} from "../../types/types";
import {GetLocalizationString} from '../../libs/GetLocalizationString';

interface IServiceListProps extends GetServices {
  [prop: string]: any
}

const ServiceList: React.FC<IServiceListProps> = (
  {
    getServices
  }
) => {
  const {isOpen, toggle} = useAccordion();
  console.log('getServices: ', getServices);
  return (
    <ul className="service_list">

      {
        getServices && Object.entries(getServices)
          .filter(([key],) => key !== 'seoTags' && key !== '__typename')
          .map(([key, value], index) => {
            if (!value) {
              return null;
            }
            return (<ServiceItem
              id={key}
              onClick={() => toggle(index)}
              isOpen={isOpen.includes(index)}
              number={`0${index + 1}`}
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
