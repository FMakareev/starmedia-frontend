import * as React from 'react';
import TextLoop from "react-text-loop";
import {LocalizedString, MainSection} from "../../../types/types";
import {GetLocalizationString} from "../../../libs/GetLocalizationString";

interface ISectionMainTitleProps extends MainSection {
  [prop: string]: any
}

const SectionMainTitle: React.FC<ISectionMainTitleProps> = (
  {
    title,
    animatedText,
  }
) => {

  return (
    <h1 className="section-main_title">
      <div className="section-main_title-static">
        {
          GetLocalizationString(title)
        }
      </div>
      <div className="section-main_title-animated">
        <TextLoop interval={3000}>
          {
            animatedText
            && animatedText.map((text: LocalizedString, index: number) => (<div key={index}>
              {
                GetLocalizationString(text)
              }
            </div>))
          }
        </TextLoop>
      </div>
    </h1>
  );
};

export default SectionMainTitle;
