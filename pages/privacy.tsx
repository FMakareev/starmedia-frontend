import React from 'react'
import "flexboxgrid";
import "../style/style.scss";
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import Row from '../components/Row/Row';
import Container from '../components/Container/Container';
import Col from '../components/Col/Col';
import {useTranslation} from "../libs/i18n";

const Privacy = () => {

  const {t} = useTranslation('nav');
  return (
    <LayoutTitleWithContent title={t('nav-privacy-policy')}>
      <Container pt={[16, 16, 32]}>
        <Row>
          <Col xs={12}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit pariatur tempora tenetur? Accusantium
            aliquid cum dolorem doloremque dolores, eos quae quasi sit? Accusantium doloremque dolores esse eum expedita
            fuga itaque laboriosam magni reprehenderit rerum? Adipisci amet exercitationem illum ipsa itaque nam natus
            quam saepe, sunt voluptas. Ad, aut consectetur harum, inventore magnam magni, modi natus nihil numquam
            placeat praesentium ratione! Accusamus alias assumenda autem consequuntur cumque dolores ea eius enim eos
            exercitationem explicabo id ipsum iure laborum libero maxime mollitia necessitatibus neque nisi placeat
            ratione reiciendis saepe, sed vel veritatis. Ex in ipsa laborum quidem. Atque consectetur nihil pariatur
            sint?

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur ex, illum necessitatibus officiis
            pariatur perspiciatis unde voluptatem. Doloremque dolorum eligendi error excepturi explicabo, id labore
            maiores molestiae neque nobis placeat quidem quis quod rerum, tenetur voluptas voluptates. Amet commodi
            corporis dignissimos dolor earum esse facilis hic ipsa molestiae nam omnis optio perspiciatis quasi ratione
            repellat sequi, tempora ullam voluptatibus. Assumenda consectetur cumque cupiditate doloremque ipsam, natus,
            neque odio officia quas repellat sapiente sequi voluptatibus! Ab aliquid aspernatur blanditiis culpa
            delectus eaque earum eos, error ex excepturi exercitationem harum impedit inventore ipsam molestias neque
            numquam quasi quia ratione sequi ullam!
          </Col>
        </Row>
      </Container>
    </LayoutTitleWithContent>
  );
};

export default Privacy

