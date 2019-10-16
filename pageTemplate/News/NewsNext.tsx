import * as React from 'react';
import Text from '../../components/Text/Text';
import NewsCardLarge from "../../components/NewsCardLarge/NewsCardLarge";
import {useTranslation} from "../../libs/i18n";
import {useLocalizationQuery} from "../../libs/useLocalizationQuery";
import {GetNextNewsEN, GetNextNewsRU, GetNextNewsUK} from "../../apollo/query/GetNewsQuery";
import Preloader from '../../components/Preloader/Preloader';

interface INewsNextProps {
  [prop: string]: any
}

// TODO: еределать аргумент запроса на slug
const NewsNext: React.FC<INewsNextProps> = (
  {
    slug,
  }
) => {
  const {t} = useTranslation('common');

  if (!slug) return null;
  const {data, loading} = useLocalizationQuery({
    ru: GetNextNewsRU,
    en: GetNextNewsEN,
    uk: GetNextNewsUK,
  }, {
    skip: !slug,
    variables: {
      slug: slug
    }
  });

  if (loading) {
    return (<Preloader/>)
  }

  if (data && !data.getNextNews) {
    return null;
  }

  return (
    <React.Fragment>

      <Text
        mb={[20, 20, 48]}
        font={'object'}
        className={'text_uppercase'}
        size={'l'}
      >
        {
          t('news_next-news')
        }
      </Text>

      <NewsCardLarge
        {
          ...(data && data.getNextNews)
        }
      />

    </React.Fragment>
  );
};

export default NewsNext;
