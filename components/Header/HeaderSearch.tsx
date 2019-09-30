import * as React from 'react';
import SearchIcon from "../Icons/SearchIcon";
import { asyncComponent } from 'react-async-component';

interface IHeaderSearchProps {
  [prop: string]: any
}

const SearchPopup = asyncComponent({
  resolve: () => import("../SearchPopup/SearchPopup"),
  serverMode: "defer"
});

const HeaderSearch: React.FC<IHeaderSearchProps> = () => {
  const [isVisible, togglePopup] = React.useState(false);
  return (
    <React.Fragment>
      <button
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
        Поиск
      </button>
      {
      SearchPopup && <SearchPopup
					isVisible={isVisible}
					onClose={() => {
            togglePopup(false);
          }}
				/>
      }

    </React.Fragment>
  );
};

export default HeaderSearch;
