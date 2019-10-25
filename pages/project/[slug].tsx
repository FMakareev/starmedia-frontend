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
  "getProjectPage": {
    "project": {
      "slug": "ryurikovichi",
      "preview": {
        "url": "https://starmedia.expanse.systems/uploads/poster.png"
      },
      "previewRu": {
        "url": "https://starmedia.expanse.systems/uploads/poster.png"
      },
      "title": {
        "ru": "Рюриковичи"
      },
      "description": {
        "ru": "<p>Яростная борьба за власть и высокое самопожертвование, завоевания и потери, интриги и законотворчество, взлет культуры и пепел пожарищ, любовь и предательство - настоящая история о династии. Рюриковичи укрепляли, обороняли, расширяли своё государство разными способами: кто-то &ndash; огнем и мечом, кто-то &ndash; миром и договором.<br />\r\nИменно во времена их правления сформировалась русская нация и русская культура. Именно Рюриковичи создали ту самую страну - трансконтинентальную полиэтническую державу, в которой мы сегодня живём.</p>"
      },
      "trailer": "http://www.youtube.com/embed/wPFOujpQKZ4?wmode=transparent&rel=0&autoplay=0",
      "duration": null,
      "trailerPreview": {
        "url": "https://starmedia.expanse.systems/uploads/poster.png"
      },
      // @ts-ignore
      "projectInfo": {
        "genre": {
          "ru": "докудрама"
        },
        "format": {
          "ru": "историческая реконструкция"
        },
        "productionYear": "2019",
        "numberOfEpisodes": 8,
        "productionDesigner": [],
        "directors": [
          {
            "ru": "Максим Беспалый"
          }
        ],
        "scenario": [
          {
            "ru": "Марина Бандиленко"
          }
        ],
        "operator": [],
        "composer": [],
        "producer": [
          {
            "ru": "Валерий Бабич"
          },
          {
            "ru": "Влад Ряшин"
          },
          {
            "ru": "Константин Эрнст"
          },
          {
            "ru": "Сергей Титинков"
          }
        ],
        "cast": [
          {
            "ru": "Александр Карпенко"
          },
          {
            "ru": "Алексей Артамонов"
          },
          {
            "ru": "Алексей Фролов"
          },
          {
            "ru": "Андрей Камин"
          },
          {
            "ru": "Вадим Мельников"
          },
          {
            "ru": "Валентина Неймеровец"
          },
          {
            "ru": "Владимир Кузнецов"
          },
          {
            "ru": "Денис Беспалый"
          },
          {
            "ru": "Дмитрий Могучев"
          },
          {
            "ru": "Евгений Капитонов"
          },
          {
            "ru": "Иван Петков"
          },
          {
            "ru": "Петр Лойко"
          },
          {
            "ru": "Светлана Бакулина"
          },
          {
            "ru": "Слава Баранов"
          }
        ]
      },
      "awards": [],
      "gallery": [
        {
          "url": "https://starmedia.expanse.systems/uploads/Снимок экрана 2019-10-25 в 17.09.17.png"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/Снимок экрана 2019-10-25 в 17.09.05.png"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/Снимок экрана 2019-10-25 в 17.08.57.png"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/Снимок экрана 2019-10-25 в 17.08.49.png"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/Снимок экрана 2019-10-25 в 17.08.36.png"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/Снимок экрана 2019-10-25 в 17.08.19.png"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/Снимок экрана 2019-10-25 в 16.59.37.png"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/Снимок экрана 2019-10-25 в 17.09.54.png"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/Снимок экрана 2019-10-25 в 17.09.43.png"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/Снимок экрана 2019-10-25 в 17.09.35.png"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/Снимок экрана 2019-10-25 в 17.09.26.png"
        }
      ],
      "tags": [
        {
          "name": {
            "ru": "HD"
          }
        }
      ],
      "similarProject": [
        {
          "slug": "delodabristov",
          "projectInfo": {
            "genre": {
              "ru": "докудрама"
            }
          },
          "preview": {
            "url": "https://starmedia.expanse.systems/uploads/postersprava_dekabristiv.jpeg"
          },
          "title": {
            "ru": "Дело Декабристов"
          }
        },
        {
          "slug": "xreshhennya_rusi",
          "projectInfo": {
            "genre": {
              "ru": "докудрама"
            }
          },
          "preview": {
            "url": "https://starmedia.expanse.systems/uploads/posterxreshhennya_rusi.jpeg"
          },
          "title": {
            "ru": "Крещение Руси"
          }
        },
        {
          "slug": "nulova_mirovaya",
          "projectInfo": {
            "genre": {
              "ru": "докудрама"
            }
          },
          "preview": {
            "url": "https://starmedia.expanse.systems/uploads/posternulova_cvitova.jpeg"
          },
          "title": {
            "ru": "Нулевая мировая"
          }
        },
        {
          "slug": "normandiya_neman",
          "projectInfo": {
            "genre": {
              "ru": "докудрама"
            }
          },
          "preview": {
            "url": "https://starmedia.expanse.systems/uploads/posternormandiya_neman.jpeg"
          },
          "title": {
            "ru": "Нормандия Неман"
          }
        }
      ]
    },
    "seoTags": {
      "description": {
        "ru": ""
      },
      "keywords": {
        "ru": ""
      },
      "title": {
        "ru": ""
      },
      "ogUrl": {
        "ru": ""
      },
      "ogImage": {
        "ru": ""
      },
      "ogType": {
        "ru": ""
      },
      "ogTitle": {
        "ru": ""
      },
      "twitterSite": {
        "ru": ""
      },
      "twitterImage": {
        "ru": ""
      },
      "twitterImageAlt": {
        "ru": ""
      },
      "twitterTitle": {
        "ru": ""
      },
      "twitterDescription": {
        "ru": ""
      },
      "twitterCard": {
        "ru": ""
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
