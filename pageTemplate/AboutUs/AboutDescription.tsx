import * as React from 'react';
import Container from "../../components/Container/Container";
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import Text from '../../components/Text/Text';
import {ViewportSizeEnum} from "../../types/types";

interface IAboutDescriptionProps {
  [prop: string]: any
}

const AboutDescription: React.FC<IAboutDescriptionProps> = () => {
  return (
    <Container mb={80}>
      <Row mb={40}>
        <Col xs={12}>
          <Text
            size={'xl'}
            font={'object'}
            className={'text_uppercase'}
          >
            Кинокомпания star media — один из лидеров по
            производству фильмов и сериалов в россии
          </Text>
        </Col>
      </Row>
      <Row start={ViewportSizeEnum.xs}>

        <Col xs={12} sm={8}>
          <Col as={'hr'}/>
        </Col>
      </Row>

      <Row between={ViewportSizeEnum.md} middle={ViewportSizeEnum.md}>
        <Col xs={12} md={4} mb={20}>
          <Text
            font={'root'}
            size={'m'}
            align={'left'}
          >
            Кинокомпания Star Media основана в 2006 году.
            Сегодня Star Media — один из лидеров отечественного производства телефильмов и сериалов. Библиотека прав
            насчитывает более пяти тысяч часов готового продукта собственного производства.
          </Text>
        </Col>
        <Col xs={12} md={4} mb={30}>
          <Text
            font={'root'}
            size={'m'}
            align={'left'}
          >
            Одно из главных направлений развития компании — дистрибуция контента на рынки других стран. Восточная и
            Западная Европа, Ближний Восток, Китай, Япония, США, Израиль — более 50 зарубежных территорий постоянно
            приобретают права на проекты Star Media.
          </Text>
        </Col>
        <Col xs={12} md={'auto'}>
          <div className="about-description_bubble">
            <Text
              type={'secondary'}
              size={'m'}
              className={'text_uppercase'}
              font={'object'}
              align={'center'}
            >
              библиотека <br/>
              более 6000 часов <br/>
              контента
            </Text>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutDescription;
