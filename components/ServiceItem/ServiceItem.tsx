import * as React from 'react';
import AnimateHeight from 'react-animate-height';
import classNames from 'classnames';

import ServiceItemContent from './ServiceItemContent';

export interface IServiceItemRowType {
  label?: string;
  value?: string;

  component?(props: any): any;

  [prop: string]: any
}


export interface IServiceItemProps {
  number?: string;
  title?: string;
  isOpen?: boolean;
  rows?: IServiceItemRowType[]

  [prop: string]: any
}

const ServiceItem: React.FC<IServiceItemProps> = (
  {
    number,
    title,
    isOpen,
    onClick,
    content,
    contacts,
    forms,

    ...rest
  }
) => {
  return (
    <li className={classNames("service_item", {
      "service_item--active": isOpen,
    })}>
      <div onClick={onClick} className={"service_item-top"}>
        <div className="service_item-top-number">
          {number}
        </div>
        <div className="service_item-top-title">
          {title}
        </div>
        {
          isOpen && <div className="service_item-top-toggle">
						<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.435 14.8492L0 28.2843L1.41421 29.6985L14.8493 16.2634L28.2843 29.6985L29.6985 28.2843L16.2635 14.8492L29.6985 1.41421L28.2843 0L14.8493 13.435L1.41424 4.29153e-06L2.86102e-05 1.41422L13.435 14.8492Z" fill="#202020"/>
						</svg>
					</div>
        }

      </div>
      <AnimateHeight
        duration={500}
        height={isOpen ? 'auto' : 0}
      >
        <ServiceItemContent
          {...rest}
          content={content}
          contacts={contacts}
          forms={forms}
        />
      </AnimateHeight>
    </li>
  );
};

export default ServiceItem;
