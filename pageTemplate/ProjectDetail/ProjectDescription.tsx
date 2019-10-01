import * as React from 'react';
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import Col from '../../components/Col/Col';
import Text from '../../components/Text/Text';
import ShareButton from '../../components/ShareButton/ShareButton';
import {Project} from "../../types/types";
import {useTranslation} from "../../libs/i18n";

interface IProjectDescriptionProps extends Project {
  [prop: string]: any
}

const ProjectDescription: React.FC<IProjectDescriptionProps> = ({description}) => {
  const {t} = useTranslation('common');

  return (
    <Container as={'section'} id={'description'} mb={[40, 40, 80]}>
      <Row>
        <Col md={7} xs={12} mb={24}>
          <Text as={'h2'} mb={16} font={'object'} size={'m'} className={'text_uppercase'}>
            {
              t('project_description')
            }
          </Text>
          <Text font={'root'} size={'m'}>
            {description && description.ru}
          </Text>
        </Col>
        <Col mdOffset={1} md={4} xs={12}>
          <Text mb={8} font={'object'} size={'m'} className={'text_uppercase'}>
            {
              t('project_share')
            }
          </Text>
          <ShareButton/>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDescription;
