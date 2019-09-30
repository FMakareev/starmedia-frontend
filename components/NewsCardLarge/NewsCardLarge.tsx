import * as React from 'react';
import ProgressiveImage from 'react-progressive-image';

import Text from '../Text/Text';
import Button from '../Button/Button';
// @ts-ignore
import placeholder from "../../static/images/news-placeholder.svg";

interface INewsCardLargeProps {
  [prop: string]: any
}

const NewsCardLarge: React.FC<INewsCardLargeProps> = () => {
  return (
    <div className={'news-card-large_wrapper'}>
      <div className="news-card-large_preview">

        <ProgressiveImage src={"https://www.fillmurray.com/288/192"} placeholder={placeholder}>
          {(src: string) => (<img
            src={src}
            alt=""
            className="news-card-large_preview-img"
          />)}
        </ProgressiveImage>
      </div>
      <div className="news-card-large_middle">
        <Text font={'root'} type={'placeholder'} mb={16}>
          28.08.2019
        </Text>
        <div className="news-card-large_title">
          продолжаются съемки исторической драмы
          «Сердце пармы»
        </div>
      </div>
      <div className="news-card-large_description">
        <Text mb={16} font={'root'} size={'m'}>
          В Подмосковье продолжаются съемки исторической драмы «Сердце пармы»! Приглашаем вас окунуться в колоритную
          атмосферу Древней Руси вместе с нами...
        </Text>
        <Button>
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export default NewsCardLarge;
