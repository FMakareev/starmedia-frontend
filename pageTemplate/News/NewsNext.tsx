import * as React from 'react';
import Text from '../../components/Text/Text';
import NewsCardLarge from "../../components/NewsCardLarge/NewsCardLarge";
import {useTranslation} from "../../libs/i18n";

interface INewsNextProps {
  [prop: string]: any
}

const NewsNext: React.FC<INewsNextProps> = () => {
  const {t} = useTranslation('common');

  return (
    <div>
      <Text mb={[20, 20, 48]} font={'object'} className={'text_uppercase'} size={'l'}>
        {t('news_next-news')}
      </Text>
      <NewsCardLarge/>
    </div>
  );
};

export default NewsNext;
