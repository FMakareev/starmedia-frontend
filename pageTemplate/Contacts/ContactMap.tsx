import * as React from 'react';
// @ts-ignore
import GoogleMapReact from 'google-map-react';
import Col from '../../components/Col/Col';

interface IContactMapProps {
  [prop: string]: any
}

const AnyReactComponent: any = () => <img src="/static/images/marker.svg" alt=""/>;

const API_KEY = 'AIzaSyBpmuuv6DZ4qp-GMdWqaVlA7lSLuXHpD-I';
const props =  {
  center: {
    lat: 55.8528765,
    lng: 37.567404,
  },
  zoom: 15
};

const ContactMap: React.FC<IContactMapProps> = () => {
  return (
    <Col mb={80} style={{height: '440px', width: '100%'}}>

      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        <AnyReactComponent
          lat={55.8528765}
          lng={37.567404}
        />
      </GoogleMapReact>

    </Col>
  );
};

export default ContactMap;
