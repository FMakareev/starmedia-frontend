import * as React from 'react';
import Link from "next/link";
import {useTranslation} from "../../../libs/i18n";
import {useGetFormatQuery} from "../../../apollo/query/GetFormatQuery";
import {FormatGQL} from '../../../types/projectTypes';
import {GetLocalizationString} from "../../../libs/GetLocalizationString";

interface ISectionMainCatalogFormatProps {
  [prop: string]: any
}

const SectionMainCatalogFormat: React.FC<ISectionMainCatalogFormatProps> = () => {
  const {i18n} = useTranslation(['nav']);


  const {data} = useGetFormatQuery();

  console.log(data && data.getFormat);
  return (
    <ul className={'section-main_catalog-format-list'}>

      {
        data && data.getFormat && data.getFormat.map((item: FormatGQL, index: number) => (<li
          key={index}
          className={'section-main_catalog-format-item'}
        >
          <Link  href={`/projects?format=${GetLocalizationString(item.name, i18n)}`}>
            <a
              className={'section-main_catalog-format-link'}
              href={`/projects?format=${GetLocalizationString(item.name, i18n)}`}
            >
              {
                GetLocalizationString(item.name, i18n)
              }
              <span
                className="section-main_catalog-format-count"
              >
                {
                  item.count
                }
              </span>
            </a>
          </Link>

        </li>))
      }

    </ul>
  );
};

export default SectionMainCatalogFormat;
