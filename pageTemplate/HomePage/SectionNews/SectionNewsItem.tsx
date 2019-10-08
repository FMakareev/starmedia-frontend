import * as React from 'react';
import Text from '../../../components/Text/Text';
import Row from '../../../components/Row/Row';
import Col from '../../../components/Col/Col';
import {ViewportSizeEnum} from '../../../types/types';
import {useTranslation} from "../../../libs/i18n";

interface ISectionNewsItemProps {
  [prop: string]: any
}

const SectionNewsItem: React.FC<ISectionNewsItemProps> = (
  {
    title,
    publish,
  }
) => {
  const {t} = useTranslation('common');

  return (
    <a href={'/'} className="section-news_item">
      <Text className="section-news_item-content" size={'m'} font={'root'} type={'inherit'}>
        {title}
      </Text>
      <Row between={ViewportSizeEnum.sm}>
        <Col xs={6} >
          <Text size={'m'} type={'placeholder'} font={'root'}>
            {publish}
          </Text>
        </Col>
        <Col xs={6}  className={'section-news_item-more'}>
          <Text size={'s'} type={'secondary'}>
            {t('button_detail')}
          </Text>
        </Col>
      </Row>
    </a>
  );
};

export default SectionNewsItem;
