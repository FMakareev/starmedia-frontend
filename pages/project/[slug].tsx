import * as React from 'react';
import {Fragment} from "react";
import {useRouter} from "next/router";
import ProjectSimilar from "../../pageTemplate/ProjectDetail/ProjectSimilar";
import ProjectAwards from '../../pageTemplate/ProjectDetail/ProjectAwards';
import ProjectDescription from '../../pageTemplate/ProjectDetail/ProjectDescription';
import ProjectGallery from '../../pageTemplate/ProjectDetail/ProjectGallery';
import ProjectMainSection from '../../pageTemplate/ProjectDetail/ProjectMainSection';

import {useLocalizationQuery} from "../../libs/useLocalizationQuery";
import {GetProjectUKQuery, GetProjectENQuery, GetProjectRUQuery} from '../../apollo/query/GetProjectQuery';
import Preloader from "../../components/Preloader/Preloader";
import Head from "../../components/Head/Head";
import {GetProjectPage} from '../../types/projectTypes';
import {GetLocalizationString} from "../../libs/GetLocalizationString";
import {useTranslation} from "react-i18next";
// @ts-ignore
const DATA: GetProjectPage = {
  "getProjectPage":  {
    "project": {
      "slug": "kra_na_rad_zabuti_kermanichi",
      "previewEn": {
        "url": "https://starmedia.expanse.systems/uploads/b8487a2cf4be5dd655baf42c8dbed4c9.jpeg"
      },
      "previewUk": {
        "url": "https://starmedia.expanse.systems/uploads/6e44bb0011c6132a7de039da657ca8f2.jpeg"
      },
      "previewRu": {
        "url": "https://starmedia.expanse.systems/uploads/d1a0b5756a5c5c740d4700d94cfcdad1.jpeg"
      },
      "title": {
        "uk": "Країна Рад. Забуті керманичі"
      },
      "description": {
        "uk": "<p>Документально-історичний цикл фільмів під робочою назвою &laquo;Країна Рад. Забуті керманичі&raquo;- це проект, що розповідає про ключові фігури в керівництві Радянського Союзу в період з 1917 по 1953 роки. Фелікс Дзержинський, Климент Ворошилов, Семен Будьонний, В&#39;ячеслав Молотов, Андрій Жданов, Віктор Абакумов, Лаврентій Берія. Їх імена відомі всій країні і сьогодні. Але мало хто пам&#39;ятає, як саме ці постаті увійшли в історію; що зробили для своєї держави. Герої циклу перебували в безодні громадянського протистояння і соціальних потрясінь, вони змінювали хід історії. В їх честь називали міста, вулиці й гірські вершини, їм зводили пам&#39;ятники, про їхні звитяги розповідали в школах, але вони не могли знати, що через роки їх біографії будуть ретельно відредаговані, а всі їх досягнення забуті.</p>"
      },
      "trailer": "http://www.youtube.com/embed/wPFOujpQKZ4?wmode=transparent&rel=0&autoplay=0",
      "duration": null,
      "trailerPreview": {
        "url": "https://starmedia.expanse.systems/uploads/0610dd68cfeaa80ca737fac6f3c01ebd.jpeg"
      },
      "trailerPreviewRu": {
        "url": "https://starmedia.expanse.systems/uploads/0610dd68cfeaa80ca737fac6f3c01ebd.jpeg"
      },
      "trailerPreviewEn": {
        "url": "https://starmedia.expanse.systems/uploads/93a427e0817d0b03279c8ab4d522244d.jpeg"
      },
      "trailerPreviewUk": {
        "url": "https://starmedia.expanse.systems/uploads/c8ea8147834fc2d63d29a44bef12aff1.jpeg"
      },
      // @ts-ignore
      "projectInfo": {
        "genre": {
          "uk": "докудрама"
        },
        "format": {
          "uk": "історична реконструкція"
        },
        "productionYear": "2016",
        "numberOfEpisodes": 8,
        "productionDesigner": [
          {
            "ru": "Александр Гиляревский"
          }
        ],
        "directors": [
          {
            "uk": ""
          }
        ],
        "scenario": [
          {
            "uk": " Олександра Лук'янова"
          },
          {
            "uk": ""
          },
          {
            "uk": " Василій Шевцов"
          },
          {
            "uk": " Єгор Васил'єв"
          },
          {
            "uk": " Інна Нечайкіна"
          }
        ],
        "operator": [
          {
            "uk": ""
          }
        ],
        "composer": [
          {
            "uk": ""
          }
        ],
        "producer": [
          {
            "uk": ""
          },
          {
            "uk": "Влад Ряшин"
          }
        ],
        "cast": [
          {
            "uk": " Адам Булгучєв"
          },
          {
            "uk": " Олександр Суворов"
          },
          {
            "uk": " Олексій Устінов"
          },
          {
            "uk": " Антон Морозов"
          },
          {
            "uk": " Роман Висоцький"
          },
          {
            "uk": " Сергій Тішин"
          },
          {
            "uk": ""
          }
        ]
      },
      "awards": [],
      "gallery": [
        {
          "url": "https://starmedia.expanse.systems/uploads/e2f3498b5f3d296487c9b1e819988e7b.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/ae43d359dc0799106eecb36b8ff7cc4b.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/9371eb71985f627389259f96beb7e4c5.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/be161e26d076f7a1e17073a88aa484c0.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/21eb8bc96200766ca0d0a50d0feccb5e.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/9a65fb5aca5192bbac992f1745bb8ac5.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/fdbf6c7b7281eb5ca53fed27d5594a53.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/7878c629202f276c495b266b93c6e1a5.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/1d2180619ffe8dd25ea8b3b416d357e7.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/cd9ce11c25c646ec3f949d2b3d0e70d2.jpeg"
        }
      ],
      "tags": [],
      "similarProject": []
    },
    "seoTags": {
      "description": {
        "uk": ""
      },
      "keywords": {
        "uk": ""
      },
      "title": {
        "uk": ""
      },
      "ogUrl": {
        "uk": ""
      },
      "ogImage": {
        "uk": ""
      },
      "ogType": {
        "uk": ""
      },
      "ogTitle": {
        "uk": ""
      },
      "twitterSite": {
        "uk": ""
      },
      "twitterImage": {
        "uk": ""
      },
      "twitterImageAlt": {
        "uk": ""
      },
      "twitterTitle": {
        "uk": ""
      },
      "twitterDescription": {
        "uk": ""
      },
      "twitterCard": {
        "uk": ""
      }
    }
  }
}


interface IProjectDetailProps {
  [prop: string]: any
}


const ProjectDetail: React.FC<IProjectDetailProps> = () => {
  const {query} = useRouter();

  const {i18n} = useTranslation();
  // @ts-ignore
  const {data, loading} = useLocalizationQuery<GetProjectPage>({
    ru: GetProjectRUQuery,
    en: GetProjectENQuery,
    uk: GetProjectUKQuery,
  }, {
    variables: {
      slug: query.slug
    }
  });

  if (loading) {
    return <Preloader/>
  }

  return (
    <Fragment>
      <Head
        seoTags={data && data.getProjectPage.seoTags}
        title={GetLocalizationString(data && data.getProjectPage.project.title, i18n)}
      />
      <ProjectMainSection
        {...(data && data.getProjectPage.project)}

        isBottomDescription={!!(data && data.getProjectPage.project.description)}
        isBottomAwards={!!(data && data.getProjectPage.project.awards && data.getProjectPage.project.awards.length)}
        isBottomGallery={!!(data && data.getProjectPage.project.gallery && data.getProjectPage.project.gallery.length)}
        isBottomSimilar={!!(data
          && data.getProjectPage.project.similarProject
          && data.getProjectPage.project.similarProject.length
        )}
      />
      <ProjectDescription
        {...(data && data.getProjectPage.project)}
      />
      <ProjectAwards
        awards={data && data.getProjectPage.project.awards || []}
      />
      <ProjectGallery
        gallery={data && data.getProjectPage.project.gallery || []}
      />
      <ProjectSimilar
        projects={data && data.getProjectPage.project.similarProject}
      />
    </Fragment>
  );
};

export default ProjectDetail;
