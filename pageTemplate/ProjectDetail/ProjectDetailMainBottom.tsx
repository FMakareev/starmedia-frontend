import * as React from 'react';
import Col from "../../components/Col/Col";
import Row from "../../components/Row/Row";
import {ButtonElementEnum, ViewportSizeEnum} from "../../types/types";
import Button from "../../components/Button/Button";
// @ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {useTranslation} from "../../libs/i18n";

interface IProjectDetailMainBottomProps {
  [prop: string]: any
}

const ProjectDetailMainBottom: React.FC<IProjectDetailMainBottomProps> = () => {
  const {t} = useTranslation('common');

  return (
    <Row between={ViewportSizeEnum.sm}>
      <Col xs={12} sm={3} md={3}>
        <AnchorLink href='#description'>
          <Button
            className={'text_align-left text_uppercase'}
            mods={['light', 's']}
            element={ButtonElementEnum.link}
            href={'item.href'}
            as={'a'}
          >
            {
              t('project_description')
            }
          </Button>
        </AnchorLink>
      </Col>
      <Col xs={12} sm={3} md={3}>
        <AnchorLink href={'#awards'}>
          <Button
            className={'text_align-left text_uppercase'}
            mods={['light', 's']}
            element={ButtonElementEnum.link}
            href={'item.href'}
            as={'a'}
          >
            {
              t('project_awards')
            }
          </Button>
        </AnchorLink>
      </Col>
      <Col xs={12} sm={3} md={3}>
        <AnchorLink href={'#gallery'}>
          <Button
            className={'text_align-left text_uppercase'}
            mods={['light', 's']}
            element={ButtonElementEnum.link}
            href={'item.href'}
            as={'a'}
          >
            {t('project_gallery')}
          </Button>
        </AnchorLink>
      </Col>
      <Col xs={12} sm={3} md={3}>
        <AnchorLink href={'#similar'}>
          <Button
            className={'text_align-left text_uppercase'}
            mods={['light', 's']}
            element={ButtonElementEnum.link}
            href={'item.href'}
            as={'a'}
          >
            {
              t('project_similar')
            }
          </Button>
        </AnchorLink>
      </Col>
    </Row>
  );
};

export default ProjectDetailMainBottom;
