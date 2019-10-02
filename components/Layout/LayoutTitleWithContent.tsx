import * as React from 'react';
import Container from '../Container/Container';
import Row from '../Row/Row';
import Col from '../Col/Col';
import Text from '../Text/Text';


interface ILayoutTitleWithContentProps {
  [prop: string]: any
}

const LayoutTitleWithContent: React.FC<ILayoutTitleWithContentProps> = ({title,titleId, titleAs,titleStyle, children}) => {
  return (
    <Col pt={64} pb={64}>
      <Container>
        <Row>
          <Col xs={12}>
            <Text id={titleId} className={'text_uppercase'} size={'l'} as={titleAs} {...titleStyle}>
              {title}
            </Text>
          </Col>
        </Row>
      </Container>
      {children}
    </Col>
  );
};

export default LayoutTitleWithContent;
