import * as React from 'react';
import ProgressiveImage from 'react-progressive-image';

import Text from '../Text/Text';
import Button from '../Button/Button';
// @ts-ignore
import placeholder from "../../static/images/news-placeholder.svg";
import {useTranslation} from '../../libs/i18n';
import {News} from "../../types/newsTypes";
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import Link from 'next/link';
import {DateFormat} from "../../libs/DateFormat";

interface INewsCardLargeProps extends News {
  [prop: string]: any
}

const NewsCardLarge: React.FC<INewsCardLargeProps> = (
  {
    name,
    info,
    slug,
    date,
    preview
  }
) => {

  const {t} = useTranslation('common');
  return (
    <div className={'news-card-large_wrapper'}>
      <div className="news-card-large_preview">
        <Link href={`/news/[slug]`} as={`/news/${slug}`}>
          <a>
            <ProgressiveImage src={preview && preview.url || ''} placeholder={placeholder}>
              {(src: string) => (<img
                src={src}
                alt=""
                className="news-card-large_preview-img"
              />)}
            </ProgressiveImage>
          </a>
        </Link>
      </div>
      <div className="news-card-large_middle">
        <Text font={'root'} type={'placeholder'} mb={16}>
          {
            date && DateFormat(date)
          }
        </Text>
        <Link href={`/news/${slug}`}>
          <a href={`/news/${slug}`} className="news-card-large_title">
            {
              GetLocalizationString(name)
            }
          </a>
        </Link>
      </div>
      <div className="news-card-large_description">
        <Text mb={16} font={'root'} size={'m'}>
          {
            GetLocalizationString(info)
          }
        </Text>
        <Link href={`/news/${slug}`}>
          <Button as={'a'} href={`/news/${slug}`}>
            {t('button_detail')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCardLarge;
