import * as React from 'react';
// @ts-ignore
import {SkyLightStateless} from "react-skylight"
import SearchPopupTextField from './SearchPopupTextField';
import {useState} from "react";
import {useRouter} from "next/router";

interface ISearchPopupProps {
  onClose(): void;

  isVisible: boolean;

  [prop: string]: any
}

const myBigGreenDialog = {
  backgroundColor: "#ffffff",
  width: "100vw",
  height: "100vh",
  margin: 0,
  left: 0,
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

const closeButtonStyle = {
  cursor: 'pointer',
  position: 'absolute',
  fontSize: '0',
  width: '56px',
  height: '56px',
  backgroundColor: 'transparent',

};

const SearchPopup: React.FC<ISearchPopupProps> = ({
                                                    onClose,
                                                    isVisible
                                                  }) => {

  const [value, setState] = useState(null);

  const route = useRouter();

  const onChange = (event: any) => {
    setState(event.target.value);
  };

  const onKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      route.push(`/search?search=${event.target.value}`);
      onClose();
      setState(null);
    }
  };


  return (
    <SkyLightStateless
      dialogStyles={myBigGreenDialog}
      closeButtonStyle={closeButtonStyle}
      isVisible={isVisible}
      onCloseClicked={onClose}
      onOverlayClicked={onClose}
    >
      <SearchPopupTextField
        input={{
          value,
          onChange,
          onKeyDown,
        }}
      />
    </SkyLightStateless>
  );
};

export default SearchPopup;
