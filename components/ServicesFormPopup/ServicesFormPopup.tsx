import * as React from 'react';
// @ts-ignore
import {SkyLightStateless} from "react-skylight"
import ServicesForm from './ServicesForm';
import Col from "../Col/Col";
import { Forms, Maybe } from '../../types/types';

interface IServicesFormPopupProps {
  isVisible?: Maybe<Forms>;
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


const ServicesFormPopup: React.FC<IServicesFormPopupProps> = (
  {
    onClose,
    initialValues,
    isVisible,
  }
) => {

  return (
    <SkyLightStateless
      dialogStyles={myBigGreenDialog}
      closeButtonStyle={closeButtonStyle}
      isVisible={!!(isVisible)}
      onCloseClicked={onClose}
      onOverlayClicked={onClose}
    >
      <Col
        className={'section-get-catalog_form-wrapper'}
        style={{
          backgroundColor: "#fff",
          position: 'absolute',
          maxWidth: "520px",
          minHeight: "400px",
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          padding: '48px 48px 56px 48px',
        }}
      >
        <ServicesForm
          callBack={onClose}
          initialValues={initialValues}
          description={isVisible && isVisible.description}
          name={isVisible && isVisible.name}
          onCloseClicked={onClose}
          type={isVisible && isVisible.type}
        />
      </Col>
    </SkyLightStateless>
  );
};

export default ServicesFormPopup;
