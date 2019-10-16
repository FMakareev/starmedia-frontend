import * as React from 'react';
import Row from "../../components/Row/Row";
import Col from "../../components/Col/Col";
import SearchResultCard from "../../components/SearchResultCard/SearchResultCard";
import {SearchPagination} from "../../types/types";

interface ISearchResultListProps extends SearchPagination {
  [prop: string]: any
}

const SearchResultList: React.FC<ISearchResultListProps> = (
  {
    search,
    searchQuery,
  }
) => {

  let ResultList: any = [];

  if (search) {
    ResultList = [
      ...(search.news ? search.news.items : []),
      ...(search.projects ? search.projects.items : []),
      ...(search.awards ? search.awards.items : []),
    ]
  }

  return (
    <Row mb={[40, 40, 56]}>
      <Col xs={12}>
        {
          ResultList && ResultList.map((item: any, index: number) =>
            (<SearchResultCard
              {...item}
              searchQuery={searchQuery}
              key={index}
            />))
        }
      </Col>

    </Row>
  );
};

export default SearchResultList;
