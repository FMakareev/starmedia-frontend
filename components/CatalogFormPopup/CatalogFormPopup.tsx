import * as React from 'react';
// @ts-ignore
import {SkyLightStateless} from "react-skylight"
import CatalogForm from './CatalogForm';
import Col from "../Col/Col";
import {OrderCatalog} from "../../types/types";

interface ICatalogFormPopupProps extends OrderCatalog {
  [prop: string]: any
}

const closeButtonStyle = {
  display: 'none',

};
const myBigGreenDialog = {
  backgroundColor: "transparent",
  width: "100vw",
  height: "100vh",

  margin: 0,
  left: '0',
  top: '0',
};


const CatalogFormPopup: React.FC<ICatalogFormPopupProps> = (
  {
    onClose,
    isVisible,
    title,
    form
  }
) => {
  return (
    <div className={'section-get-catalog_popup'}>
      <SkyLightStateless
        dialogStyles={myBigGreenDialog}
        closeButtonStyle={closeButtonStyle}
        isVisible={isVisible}
        onCloseClicked={onClose}
        onOverlayClicked={onClose}
      >
        <Col
          className={'section-get-catalog_form-wrapper skylight-dialog'}
          style={{
            backgroundColor: "#fff",
            position: 'absolute',
            maxWidth: "420px",
            width: '100%',
            minHeight: "400px",
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            padding: '48px 48px 56px 48px',
          }}
        >
          <CatalogForm
            initialValues={{
              title,
              form: form && form.id,
            }}
            onCloseClicked={onClose}
            callBack={onClose}
          />
        </Col>
      </SkyLightStateless>
    </div>
  );
};

export default CatalogFormPopup;
