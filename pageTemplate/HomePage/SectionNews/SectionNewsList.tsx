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
        news && news.map((item: any, index: any) => <Col
          key={`${index}`}
          xs={12}
          sm={6}
          md={3}
          pb={16}
          pt={16}
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
