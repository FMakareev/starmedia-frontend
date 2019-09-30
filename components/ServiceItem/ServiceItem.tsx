import * as React from 'react';
import AnimateHeight from 'react-animate-height';
import classNames from 'classnames';

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
    rows,
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

					</div>
        }

      </div>
      <AnimateHeight
        duration={500}
        height={isOpen ? 'auto' : 0}
      >
        <div className="service_item-content">
          {
            rows && rows.map((item:IServiceItemRowType, index: number )=>{

              if(item.component){
                return item.component({});
              }

              return (<div key={index} className="service_item-content-row">
                <div className="service_item-content-label">
                  {item.label}
                </div>
                <div className="service_item-content-value">
                  {item.value}
                </div>
              </div>)
            })
          }


        </div>

      </AnimateHeight>
    </li>
  );
};

export default ServiceItem;
