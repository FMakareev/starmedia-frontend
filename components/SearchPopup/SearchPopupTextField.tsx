import * as React from 'react';
import SearchLargeIcon from '../Icons/SearchLargeIcon';
import {useTranslation} from "../../libs/i18n";

interface ISearchPopupTextFieldProps {
  [prop: string]: any
}

const SearchPopupTextField: React.FC<ISearchPopupTextFieldProps> = () => {
  const {t} = useTranslation('common');

  return (
    <label aria-label={'search field'} className={'search-popup-text-field_wrapper'}>
      <input
        className={'search-popup-text-field'}
        type="text"
      />
      <div className="search-popup-text-field_placeholder">
        {t('search_placeholder')}
      </div>
      <div className="search-popup-text-field_icon">
        <SearchLargeIcon/>
      </div>
    </label>
  );
};

export default SearchPopupTextField;
