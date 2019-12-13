import * as React from 'react';
// @ts-ignore
import GoogleMapReact from 'google-map-react';
import Col from '../../components/Col/Col';
import {Address, Contacts} from "../../types/types";

import styles from './mapStyle.json';

interface IContactMapProps extends Contacts {
  [prop: string]: any
}

const AnyReactComponent: any = () => {
  return (<img src="/static/images/marker.svg" alt=""/>)
};

const API_KEY = 'AIzaSyBpmuuv6DZ4qp-GMdWqaVlA7lSLuXHpD-I';
const props = {
  center: {
    lat: 55.8528765,
    lng: 37.567404,
  },
  zoom: 12
};
const regexpCoords = new RegExp(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/, 'i');
const coordsValidation = (coords: string) => regexpCoords.test(coords);

const calculateMiddleBetweenTwoPoints = (pointList: any[]) => {
  let middleCoords = [0, 0];
  let pointListLength = pointList.length;
  pointList.forEach((point: any[]) => {
    middleCoords[0] += parseFloat(point[0]);
    middleCoords[1] += parseFloat(point[1]);
  });
  middleCoords[0] = middleCoords[0] / pointListLength;
  middleCoords[1] = middleCoords[1] / pointListLength;
  return middleCoords;
};

const ContactMap: React.FC<IContactMapProps> = (
  {
    currentCity,
    mainContacts,
  }
) => {


  const {addresses} = mainContacts && mainContacts[currentCity] || {};

  const centerMap = addresses && calculateMiddleBetweenTwoPoints(addresses.map((address: Address) =>
    address.gpsPoints ? [address.gpsPoints.lat, address.gpsPoints.lng] : [])) || null;

  if (!centerMap) {
    return null;
  }
  return (
    <Col style={{height: '440px', width: '100%'}}>

      <GoogleMapReact
        bootstrapURLKeys={{key: API_KEY}}
        center={centerMap.length && coordsValidation(`${centerMap[0]}, ${centerMap[1]}`) && {
          lat: centerMap[0],
          lng: centerMap[1],
        }}
        defaultZoom={props.zoom}
        options={{styles}}
      >
        {
          addresses &&
          addresses.map((item: Address, index: number) => {
            if(!coordsValidation(`${item && item.gpsPoints && item.gpsPoints.lat}, ${item && item.gpsPoints && item.gpsPoints.lng}`)){
              return null;
            }

            return (<AnyReactComponent
              key={index}
              lat={item && item.gpsPoints && item.gpsPoints.lat}
              lng={item && item.gpsPoints && item.gpsPoints.lng}
            />)
          })
        }

      </GoogleMapReact>

    </Col>
  );
};

export default ContactMap;
