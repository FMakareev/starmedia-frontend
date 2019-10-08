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
import {useTranslation, Trans} from "../libs/i18n";
import Head from "../components/Head/Head";
import {Fragment} from "react";

interface ISearchProps {
  [prop: string]: any
}

const Search: React.FC<ISearchProps> = () => {

  const {t,i18n} = useTranslation('common');
  const {t:tNav} = useTranslation('nav');
  return (
   <Fragment>
     <Head
       title={t('nav-search-result')}
     />
     <LayoutTitleWithContent title={tNav('nav-search-result')}>
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
               placeholder={t('search_placeholder-search-by-name')}
             />
           </Col>
           <Col xs={12} sm={4} md={3}>
             <Text align={['left','right']} type={'placeholder'} font={'root'} size={'s'}>
               <Trans i18n={i18n} i18nKey={'search_found-n-result'} count={12}>
                 Найдено {{count:12}} результата
               </Trans>
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
   </Fragment>
  );
};

export default Search;
