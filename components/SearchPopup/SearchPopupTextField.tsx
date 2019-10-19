import * as React from 'react';
import SearchLargeIcon from '../Icons/SearchLargeIcon';
import {useTranslation} from "../../libs/i18n";

interface ISearchPopupTextFieldProps {
  [prop: string]: any
}

const SearchPopupTextField: React.FC<ISearchPopupTextFieldProps> = ({input}) => {
  const {t} = useTranslation('common');
  return (
    <label aria-label={'search field'} className={'search-popup-text-field_wrapper'}>
      <input
        {...input}
        value={input.value || ''}
        className={'search-popup-text-field'}
        type="text"
      />
      {
        !(input && input.value) &&
				<div className="search-popup-text-field_placeholder">
          {t('search_placeholder')}
				</div>
      }

      <div className="search-popup-text-field_icon">
        <SearchLargeIcon/>
      </div>
    </label>
  );
};

export default SearchPopupTextField;
