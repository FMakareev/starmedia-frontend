import * as React from 'react';
import NextHead from 'next/head';
import {Maybe, SeoTags} from '../../types/types';
import {GetLocalizationString} from '../../libs/GetLocalizationString';

interface IHeadProps {
  title?: string;
  seoTags?: Maybe<SeoTags>

  [prop: string]: any
}

const separateString = (string: string): string => {
  let uppercaseChar = string.match(/[A-Z]/g);
  if (!uppercaseChar) {
    return '';
  }
  let positionUppercaseChar = string.indexOf(uppercaseChar[0]);
  return (string.substring(0, positionUppercaseChar) + ':' + string.substring(positionUppercaseChar)).toLowerCase();
};

const Head: React.FC<IHeadProps> = (
  {
    title,
    seoTags
  }
) => {

  const seoTagsTransform: any[] = [];

  seoTags && Object.entries(seoTags)
    .filter(([key]: any) => key !== '__typename')
    .map(([key, value], index) => {
      if (key.indexOf('og') === 0) {
        seoTagsTransform.push(<meta
          content={GetLocalizationString(value)}
          key={index} property={separateString(key)}
        />)
      } else if (key.indexOf('twitter') === 0) {
        seoTagsTransform.push(<meta
          content={GetLocalizationString(value)}
          key={index} name={separateString(key)}
        />)
      } else {
        seoTagsTransform.push(<meta
          content={GetLocalizationString(value)}
          key={index}
          name={key}
        />)
      }
    });

  return (
    <NextHead>
      <meta charSet={'utf-8'}/>
      <title>{title || ''}</title>
      {
        seoTagsTransform.length && seoTagsTransform.map((item) => item)
      }
    </NextHead>
  );
};

export default Head;
