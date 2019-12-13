import * as React from 'react';
import Row from "../../components/Row/Row";
import {ViewportSizeEnum} from "../../types/types";
import Col from "../../components/Col/Col";
import TextField from "../../components/TextField/TextField";
import SearchIcon from "../../components/Icons/SearchIcon";
import Text from "../../components/Text/Text";
import {Trans, useTranslation} from "../../libs/i18n";


interface ISearchHeadProps {
  [prop: string]: any
}

const SearchHead: React.FC<ISearchHeadProps> = (
  {
    setValue,
    value,
    countSearchResult,
  }
) => {
  const {t, i18n} = useTranslation('common');



  const onChange=(event:any) => {
    setValue(event.target.value);
  };

  return (
    <Row
      mb={[30, 30, 56]}
      pt={[16, 16, 32]}
      between={ViewportSizeEnum.sm}
      middle={ViewportSizeEnum.sm}>
      <Col xs={12} sm={4} md={3} mb={[24, 24, '0']}>
        <TextField
          input={{
            onChange: onChange,
            value: value,
          }}
          label={null}
          icon={<SearchIcon width={'16px'} height={'16px'}/>}
          placeholder={t('search_placeholder-search-by-name')}
        />
      </Col>
      <Col xs={12} sm={4} md={3}>
        <Text align={['left', 'right']} type={'placeholder'} font={'root'} size={'s'}>

          {
            countSearchResult > 0 &&  <Trans i18n={i18n} i18nKey={'search_found-n-result'} count={countSearchResult}>
							Найдено {{count: countSearchResult}} результата
						</Trans>
          }

          {
            countSearchResult === 0 && <div>
              {
                t('search_not-found_not-result')
              }
            </div>
          }
        </Text>
      </Col>
    </Row>
  );
};

export default SearchHead;
