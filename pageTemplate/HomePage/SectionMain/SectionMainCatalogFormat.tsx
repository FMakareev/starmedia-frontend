import * as React from 'react';
import Link from "next/link";
import {useTranslation} from "../../../libs/i18n";

interface ISectionMainCatalogFormatProps {
  [prop: string]: any
}

const SectionMainCatalogFormat: React.FC<ISectionMainCatalogFormatProps> = () => {
  const {t} = useTranslation(['nav']);

  return (
    <ul className={'section-main_catalog-format-list'}>
      <li className={'section-main_catalog-format-item'}>
        <Link href={'/projects?format=films'}>
          <a
            className={'section-main_catalog-format-link'}
            href="/projects?format=films"
          >
            {t('nav-project-films')}
            <span className="section-main_catalog-format-count">
            22
          </span>
          </a>
        </Link>

      </li>
      <li className={'section-main_catalog-format-item'}>
        <Link href={'/projects?format=serial'}>
          <a className={'section-main_catalog-format-link'} href={'/projects?format=serial'}>
            {t('nav-project-serial')}
            <span className="section-main_catalog-format-count">
            64
          </span>
          </a>
        </Link>
      </li>
      <li className={'section-main_catalog-format-item'}>
        <Link href={'/projects?format=telefilm'}>
          <a className={'section-main_catalog-format-link'} href={'/projects?format=telefilm'}>
            {t('nav-project-telefilm')}
            <span className="section-main_catalog-format-count">
            12
          </span>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default SectionMainCatalogFormat;
