import * as React from 'react';
import LayoutTitleWithContent from '../components/Layout/LayoutTitleWithContent';
import Container from '../components/Container/Container';
import TextField from "../components/TextField/TextField";
import Col from "../components/Col/Col";
import Row from '../components/Row/Row';
import Text from '../components/Text/Text';
import SearchIcon from "../components/Icons/SearchIcon";
import {ViewportSizeEnum} from "../types/types";
import Pagination from "../components/Pagination/Pagination";
import SearchResultCard from "../components/SearchResultCard/SearchResultCard";

interface ISearchProps {
  [prop: string]: any
}

const Search: React.FC<ISearchProps> = () => {
  return (
    <LayoutTitleWithContent title={'Результаты поиска'}>
      <Container>
        <Row
          mb={[30, 30, 56]}
          pt={[16, 16, 32]}
          between={ViewportSizeEnum.sm}
          middle={ViewportSizeEnum.sm}>
          <Col xs={12} sm={4} md={3} mb={[24, 24, '0']}>
            <TextField
              label={null}
              icon={<SearchIcon width={'16px'} height={'16px'}/>}
              placeholder={'Поиск по названию'}
            />
          </Col>
          <Col xs={12} sm={4} md={3}>
            <Text align={['left','right']} type={'placeholder'} font={'root'} size={'s'}>
              Найдено 32 результата
            </Text>
          </Col>
        </Row>
        <Row mb={[40, 40, 56]}>
          <Col xs={12}>
            <SearchResultCard/>
            <SearchResultCard/>
            <SearchResultCard/>
            <SearchResultCard/>
          </Col>

        </Row>

        <Pagination/>

      </Container>

    </LayoutTitleWithContent>
  );
};

export default Search;
