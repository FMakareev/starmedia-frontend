import * as React from 'react';
import Col from "../../../components/Col/Col";
import SectionNewsItem from "./SectionNewsItem";
import ReactIdSwiper from "react-id-swiper";

interface ISectionNewsListProps {
  [prop: string]: any
}

const params = () => ({
  slidesPerView: 'auto',
  centeredSlides: false,
  watchOverflow: true,
  spaceBetween: 32,
  slidesOffsetBefore: 16,
  slidesOffsetAfter: 279*3,
})
const SectionNewsList: React.FC<ISectionNewsListProps> = ({news}) => {
  const paramsInstance = params();
  return (
    <Col>
      <ReactIdSwiper
        {...paramsInstance}
      >
        {
          news && news.map((item: any, index: any) => <Col
            key={`${index}`}
            pb={16}
            pt={16}
            style={{
              width: '279px'
            }}
          >
            <SectionNewsItem
              {...item}
            />
          </Col>)
        }
      </ReactIdSwiper>
    </Col>
  );
};

export default SectionNewsList;
