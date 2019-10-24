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
const data:GetProjectPage = {
  "getProjectPage": {
    "project": {
      "slug": "xreshhennya_rusi",
      "preview": {
        "url": "https://starmedia.expanse.systems/uploads/posterxreshhennya_rusi.jpeg"
      },
      "previewRu": {
        "url": "https://starmedia.expanse.systems/uploads/posterxreshhennya_rusi.jpeg"
      },
      "title": {
        "ru": "Крещение Руси"
      },
      "description": {
        "ru": "<p>Проект &quot;Крещение Руси&quot; рассказывает об удивительном периоде в истории, связанным с приходом и распространением Христианства на территории Древней Руси. Из фильма зритель узнает, как, из чего складывались взгляды и религиозные убеждения людей того времени, как менялся политическим менталитет, как зарождалось то, что сегодня мы называем древнерусской культурой и духовностью - все то, что в последствии подарило нам великую святую Русь с ее тысячелетней историей и непрерывной связью с сегодняшним днем.</p>"
      },
      "trailer": "https://www.youtube.com/watch?v=ixTDeBtjflQ",
      "duration": null,
      "trailerPreview": {
        "url": "https://starmedia.expanse.systems/uploads/Снимок экрана 2019-10-19 в 14.53.14.png"
      },
      // @ts-ignore
      "projectInfo": {
        "genre": {
          "ru": "докудрама"
        },
        "format": {
          "ru": "сериал"
        },
        "productionYear": 2016,
        "numberOfEpisodes": 4,
        "productionDesigner": [
          {
            "ru": "Александр Бурков"
          }
        ],
        "directors": [
          {
            "ru": "Максим Беспалый"
          }
        ],
        "scenario": [
          {
            "ru": "Максим Беспалый"
          },
          {
            "ru": "Максим Кальсин"
          },
          {
            "ru": "Марина Бандиленко"
          }
        ],
        "operator": [
          {
            "ru": "Иван Бархварт"
          }
        ],
        "composer": [
          {
            "ru": "Максим Войтов"
          }
        ],
        "producer": [
          {
            "ru": "Валерий Бабич"
          },
          {
            "ru": "Влад Ряшин"
          }
        ],
        "cast": [
          {
            "ru": "Андрей Курилов"
          },
          {
            "ru": "Антон Пампушный"
          },
          {
            "ru": "Валерий Лукьянов"
          },
          {
            "ru": "Виктор Куклин"
          },
          {
            "ru": "Дмитрий Митюрич"
          },
          {
            "ru": "Евгений Журавкин"
          },
          {
            "ru": "Евгения Афонская"
          },
          {
            "ru": "Екатерина Беспалая"
          },
          {
            "ru": "Иван Латушко"
          },
          {
            "ru": "Сергей Халиченко"
          },
          {
            "ru": "Юлия Харьковская"
          }
        ]
      },
      "awards": [
        {
          "name": {
            "ru": "Победа на международном фестивале православного кино!"
          },
          "slug": "pobeda_na_mezhdunarodnom_festivale_pravoslavnogo_kino",
          "date": "2017-10-08T00:00:00+00:00"
        }
      ],
      "gallery": [
        {
          "url": "https://starmedia.expanse.systems/uploads/3c27e84f910ad037f38fad785186bc2a0c234788.jpg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/5d6bde6f361edac91e2b02c56914a5e3d5994616.jpg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/6abde79eb38c42b243e9a1f38a7347ab0eab863e.jpg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/8f643a803114a7aafe10d5732bc1dd435f13d07f.jpg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/9e4ccbcf9155c77f77f9b6820ccf6706e69182d3.jpg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/21e7d9f487a7fbebd167ac59742597df649616ec.jpg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/0962ffd31c0b4e52f493bca9f00a958676f48a1c.jpg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/a6ca01b84acb10ddf162aca94727b0ecd3f60a08.jpg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/bc9f4841ad495c1a6f80db4e2ff238c014e2ec8b.jpg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/fc4801dcff08d3fc3aa85223749aa439ec41c187.jpg"
        }
      ],
      "tags": [],
      "similarProject": [
        {
          "slug": "ryurikovichi",
          "projectInfo": {
            "genre": {
              "ru": "докудрама"
            }
          },
          "preview": {
            "url": "https://starmedia.expanse.systems/uploads/poster.png"
          },
          "title": {
            "ru": "Рюриковичи"
          }
        },
        {
          "slug": "revolyuciya",
          "projectInfo": {
            "genre": {
              "ru": "докудрама"
            }
          },
          "preview": {
            "url": "https://starmedia.expanse.systems/uploads/posterrevolyuciya.png"
          },
          "title": {
            "ru": "Подлинная история Русской революции"
          }
        },
        {
          "slug": "polskij_slid",
          "projectInfo": {
            "genre": {
              "ru": "докудрама"
            }
          },
          "preview": {
            "url": "https://starmedia.expanse.systems/uploads/posterpolskiisled.jpeg"
          },
          "title": {
            "ru": "Польский след"
          }
        },
        {
          "slug": "zabitievoghdi",
          "projectInfo": {
            "genre": {
              "ru": "докудрама"
            }
          },
          "preview": {
            "url": "https://starmedia.expanse.systems/uploads/kra_na_rad_zabuti_kermanichi.jpeg"
          },
          "title": {
            "ru": "Страна советов. Забытые вожди"
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
  const {data:as, loading} = useLocalizationQuery<GetProjectPage>({
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
