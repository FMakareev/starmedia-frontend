import * as React from 'react';
import SearchIcon from "../Icons/SearchIcon";
import {useTranslation} from "../../libs/i18n";
import dynamic from 'next/dynamic'

interface IHeaderSearchProps {
  [prop: string]: any
}

const SearchPopup = dynamic(
  () => import("../SearchPopup/SearchPopup"),
  {ssr: false}
);

const HeaderSearch: React.FC<IHeaderSearchProps> = (

) => {

  const [isVisible, togglePopup] = React.useState(false);
  const {t} = useTranslation('common');

  const onClose = () => {
    togglePopup(false);
  }

  return (
    <React.Fragment>
      <button
        aria-label={'search button'}
        onClick={() => {
          togglePopup(true);
        }}
        className="header_search-button"
      >
        <SearchIcon
          className={'mr-10'}
          width={'15px'}
          height={'15px'}
        />
        {
          t('search_btn-label')
        }
      </button>
      {
        SearchPopup && <SearchPopup
					isVisible={isVisible}
					onClose={onClose}
				/>
      }

    </React.Fragment>
  );
};

export default HeaderSearch;
