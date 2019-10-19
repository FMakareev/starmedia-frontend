import * as React from 'react';
import Col from "../../components/Col/Col";
import Row from "../../components/Row/Row";
import {ButtonElementEnum, ViewportSizeEnum} from "../../types/types";
import Button from "../../components/Button/Button";
// @ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {useTranslation} from "../../libs/i18n";
import classNames from 'classnames';

interface IProjectDetailMainBottomProps {
  [prop: string]: any
}

const ProjectDetailMainBottom: React.FC<IProjectDetailMainBottomProps> = (
  {
    isBottomDescription,
    isBottomAwards,
    isBottomGallery,
    isBottomSimilar,
  }
) => {
  const {t} = useTranslation('common');

  return (
    <Row between={ViewportSizeEnum.sm}>
      <Col xs={12} sm={3} md={3}>
        <AnchorLink offset='100' href='#description'>
          <Button
            className={classNames('text_align-left text_uppercase', {
              'button_link--disabled': !isBottomDescription,
            })}
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
        <AnchorLink offset='100' href={'#awards'}>
          <Button
            className={classNames('text_align-left text_uppercase', {
              'button_link--disabled': !isBottomAwards,
            })}
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
        <AnchorLink offset='100' href={'#gallery'}>
          <Button
            className={classNames('text_align-left text_uppercase', {
              'button_link--disabled': !isBottomGallery,
            })}
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
        <AnchorLink offset='100' href={'#similar'}>
          <Button
            className={classNames('text_align-left text_uppercase', {
              'button_link--disabled': !isBottomSimilar,
            })}
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
