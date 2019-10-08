import * as React from 'react';
// @ts-ignore
import ReactPaginate from 'react-paginate';
import Container from '../Container/Container';
import Row from "../Row/Row";
import {ButtonElementEnum, ViewportSizeEnum} from "../../types/types";
import Button from "../Button/Button";
import ArrowLargeLeft from '../Icons/ArrowLargeLeft';
import ArrowLargeRight from "../Icons/ArrowLargeRight";
import {useTranslation} from "../../libs/i18n";

interface IPaginationProps {
  [prop: string]: any
}

const Pagination: React.FC<IPaginationProps> = () => {

  const {t} = useTranslation('common');
  return (
    <Container>
      <Row mb={56} center={ViewportSizeEnum.xs}>
        <Button aria-label={'Show more'}  mods={['m']} element={ButtonElementEnum.circle}>
          {t('button_show-more')}
        </Button>
      </Row>
      <Row center={ViewportSizeEnum.sm}>
        <ReactPaginate
          previousLabel={<ArrowLargeLeft/>}
          nextLabel={<ArrowLargeRight/>}
          containerClassName={'pagination_container'}
          pageClassName={'pagination_page-item'}
          pageLinkClassName={"pagination_page-link"}
          previousClassName={'pagination_previous'}
          nextClassName={'pagination_next'}
          previousLinkClassName={"pagination_page-link"}
          nextLinkClassName={'pagination_page-link'}

          breakClassName={'pagination_page-item'}
          breakLinkClassName={"pagination_page-link"}

          activeClassName={'pagination_page-item--active'}

        />
      </Row>

    </Container>
  );
};

export default Pagination;
