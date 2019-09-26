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
        <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
          <span>вдохновляют</span>
          <span>захватывают дух</span>
          <span>Запоминаются</span>
        </TextLoop>
      </div>
    </div>
  );
};

export default SectionMainTitle;
