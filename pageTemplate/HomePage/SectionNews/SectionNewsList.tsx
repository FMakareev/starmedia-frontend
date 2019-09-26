import * as React from 'react';
import Col from "../../../components/Col/Col";
import SectionNewsItem from "./SectionNewsItem";

interface ISectionNewsListProps {
  [prop: string]: any
}

const SectionNewsList: React.FC<ISectionNewsListProps> = ({news}) => {
  return (
    <React.Fragment>
      {
        news.map((item: any, index: any) => <Col
          key={`${index}`}
          sm={3}
        >
          <SectionNewsItem
            {...item}
          />
        </Col>)
      }
    </React.Fragment>
  );
};

export default SectionNewsList;
