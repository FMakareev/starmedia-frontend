import * as React from 'react';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import AwardCard from '../../components/AwardCard/AwardCard';
import {
  PaginationVariables,
  ViewportSizeEnum
} from "../../types/types";
import Pagination from '../../components/Pagination/Pagination';
import {AwardPaginationRU, AwardPaginationEN, AwardPaginationUK} from "../../apollo/query/GetAwardQuery";
import {Award, AwardPagination} from "../../types/awardsTypes";
import {usePaginationQuery} from "../../libs/usePaginationQuery";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

interface IAwardsListProps {
  [prop: string]: any
}

const AwardsList: React.FC<IAwardsListProps> = () => {

  const {
    data,
    loading,
    page,
    onFetchMore,
    onPaginationFetchMore,
    calculatePageCount,
  } = usePaginationQuery<AwardPagination, PaginationVariables>({
    queryName: 'awardPagination',
    defaultLimit: 10,
    localizationQuery: {
      ru: AwardPaginationRU,
      en: AwardPaginationEN,
      uk: AwardPaginationUK,
    }
  });

  return (
    <Container>
      <Col
        mb={[40, 40, 72]}
      >
        <TransitionGroup className={'row about-us-awards_list'}>
          {
            data
            && data.awardPagination.items
            && data.awardPagination.items.map((award: Award, index: number) =>
              <CSSTransition
                timeout={300}
                key={index}
                classNames="transition-list"
              >
                <AwardCard
                  {...award}
                />
              </CSSTransition>
            )
          }
        </TransitionGroup>
      </Col>
      <Row center={ViewportSizeEnum.sm}>
        <Pagination
          isPagination={false}
          forcePage={page + 1}
          loading={loading}
          onFetchMore={onFetchMore}
          onPageChange={onPaginationFetchMore}
          pageCount={calculatePageCount()}
        />
      </Row>
    </Container>
  );
};

export default AwardsList;
/**
 * изучить приложение полностью
 *
 * */
