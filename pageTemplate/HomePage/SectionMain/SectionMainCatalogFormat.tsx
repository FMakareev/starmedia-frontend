import * as React from 'react';

interface ISectionMainCatalogFormatProps {
  [prop: string]: any
}

const SectionMainCatalogFormat: React.FC<ISectionMainCatalogFormatProps> = () => {
  return (
    <ul className={'section-main_catalog-format-list'}>
      <li className={'section-main_catalog-format-item'}>
        <a className={'section-main_catalog-format-link'} href="">
          Фильмы
          <span className="section-main_catalog-format-count">
            22
          </span>
        </a>
      </li>
      <li className={'section-main_catalog-format-item'}>
        <a className={'section-main_catalog-format-link'} href="">
          Сериалы
          <span className="section-main_catalog-format-count">
            64
          </span>
        </a>
      </li>
      <li className={'section-main_catalog-format-item'}>
        <a className={'section-main_catalog-format-link'} href="">
          телепроекты
          <span className="section-main_catalog-format-count">
            12
          </span>
        </a>
      </li>
    </ul>
  );
};

export default SectionMainCatalogFormat;
