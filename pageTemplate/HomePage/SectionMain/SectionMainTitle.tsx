import * as React from 'react';
import TextLoop from "react-text-loop";

interface ISectionMainTitleProps {
  [prop: string]: any
}

const SectionMainTitle: React.FC<ISectionMainTitleProps> = () => {
  return (
    <div className="section-main_title">
      <div className="section-main_title-static">
        Делаем фильмы <br/>
        и сериалы, которые
      </div>
      <div className="section-main_title-animated">
        <TextLoop interval={3000}>
          <div>вдохновляют</div>
          <div>захватывают дух</div>
          <div>Запоминаются</div>
        </TextLoop>
      </div>
    </div>
  );
};

export default SectionMainTitle;
