import * as React from 'react';
import SearchLargeIcon from '../Icons/SearchLargeIcon';

interface ISearchPopupTextFieldProps {
  [prop: string]: any
}

const SearchPopupTextField: React.FC<ISearchPopupTextFieldProps> = () => {
  return (
    <label className={'search-popup-text-field_wrapper'}>
      <input
        className={'search-popup-text-field'}
        type="text"
      />
      <div className="search-popup-text-field_placeholder">
        Поиск по сайту
      </div>
      <div className="search-popup-text-field_icon">
        <SearchLargeIcon/>
      </div>
    </label>
  );
};

export default SearchPopupTextField;
