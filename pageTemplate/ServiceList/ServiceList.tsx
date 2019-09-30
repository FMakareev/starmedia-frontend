import * as React from 'react';
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import { ServicesListConfig } from './ServicesListConfig';
import {useAccordion} from "../../libs/useAccordion";

interface IServiceListProps {
  [prop: string]: any
}

const ServiceList: React.FC<IServiceListProps> = () => {

  const {isOpen, toggle} = useAccordion();

  return (
    <ul className="service_list">
      {
        ServicesListConfig.map((item: any, index: number) => (<ServiceItem
          onClick={() => toggle(index)}
          isOpen={isOpen.includes(index)}
          number={`0${index + 1}`}
          key={index}
          title={item.title}
          rows={item.rows}
        />))
      }
    </ul>
  );
};

export default ServiceList;
