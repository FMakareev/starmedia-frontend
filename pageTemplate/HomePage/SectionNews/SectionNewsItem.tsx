import * as React from 'react';
import Text from '../../../components/Text/Text';
import Row from '../../../components/Row/Row';
import Col from '../../../components/Col/Col';
import {ViewportSizeEnum} from '../../../types/types';
import {useTranslation} from "../../../libs/i18n";
import {GetLocalizationString} from "../../../libs/GetLocalizationString";
import Link from "next/link";
import { DateFormat } from '../../../libs/DateFormat';

interface ISectionNewsItemProps {
  [prop: string]: any
}

const SectionNewsItem: React.FC<ISectionNewsItemProps> = (
  {
    name,
    date,
    slug
  }
) => {
  const {t} = useTranslation('common');

  return (
    <Link href={`/news/${slug}`}>
      <a href={`/news/${slug}`} className="section-news_item">
        <Text className="section-news_item-content" size={'m'} font={'root'} type={'inherit'}>
          {GetLocalizationString(name)}
        </Text>
        <Row between={ViewportSizeEnum.sm}>
          <Col xs={6} >
            <Text size={'m'} type={'placeholder'} font={'root'}>
              {
                date && DateFormat(date)
              }
            </Text>
          </Col>
          <Col xs={6}  className={'section-news_item-more'}>
            <Text size={'s'} type={'secondary'}>
              {t('button_detail')}
            </Text>
          </Col>
        </Row>
      </a>
    </Link>
  );
};

export default SectionNewsItem;
