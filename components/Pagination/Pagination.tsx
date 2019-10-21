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
import ReactHtmlParser from "react-html-parser";

interface IPaginationProps {
  onFetchMore: () => any,
  onPageChange?: (data: any) => void,

  pageCount?: number,
  forcePage?: number,
  loading: boolean,
  isPagination?: boolean,
  disabled?: boolean,

  [prop: string]: any
}

const Pagination: React.FC<IPaginationProps> = (
  {
    onFetchMore,
    pageCount,
    onPageChange,
    loading,
    forcePage,
    isPagination = true,
    disabled,
  }
) => {

  const {t} = useTranslation('common');
  return (
    <Container>
      <Row mb={56} center={ViewportSizeEnum.xs}>
        <Button
          disabled={loading || disabled}
          onClick={onFetchMore}
          aria-label={'Show more'}
          mods={['m']}
          element={ButtonElementEnum.circle}
        >
          <span className={'reset-style'}>
            {
              ReactHtmlParser(t('button_show-more'))
            }
          </span>
        </Button>
      </Row>
      {
        isPagination && <Row center={ViewportSizeEnum.xs}>
					<ReactPaginate
						disabled={disabled}
						pageCount={pageCount}
						onPageChange={onPageChange}
						forcePage={forcePage}
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
      }


    </Container>
  );
};

export default Pagination;
