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
const DATA:GetProjectPage = {
  "getProjectPage": {
    "project": {
      "slug": "normandiya_neman",
      "preview": {
        "url": "https://starmedia.expanse.systems/uploads/posternormandiya_neman.jpeg"
      },
      "title": {
        "ru": "Нормандия Неман"
      },
      "description": {
        "ru": "<p>1942 год. Тегеран. Гадалка, указав на одного молодого француза, назвала его везучим. И действительно: из четверых друзей войну переживет только он &ndash; граф Ролан де ля Пуап. В ноябре 1942 года четырнадцать летчиков-истребителей, преодолев пол мира, прибыли в холодный и пугающий их мир - в СССР. Они мечтали бороться за свободу Франции и откликнулись на призыв генерала де Голля сражаться в рядах советских войск против общего врага - фашистской Германии. Авиаполк &laquo;Нормандия-Неман&raquo; воевал на советских &laquo;яках&raquo;, не уступающих в скорости и маневренности немецким истребителям. Пролетарии и аристократы, советские механики и французские пилоты, сплоченные фронтовым братством, делили поровну и смерть, и славу. Они были молоды, и они стали героями.<br />\r\nВ основу фильма, легли воспоминания Ролана де ля Пуапа - французского летчика легендарного авиаполка &laquo;Нормандия-Неман&raquo;. Используя возможности компьютерной графики, авторы воссоздают воздушные бои и военные будни французского истребительного авиаполка, воевавшего на стороне СССР во время Второй мировой войны.</p>"
      },
      "trailer": "https://www.youtube.com/watch?v=lGiaDhdgOeA",
      "trailerPreview": {
        "url": "https://starmedia.expanse.systems/uploads/Снимок экрана 2019-10-19 в 15.52.12.png"
      },
      // @ts-ignore
      "projectInfo": {
        "genre": {
          "ru": "докудрама"
        },
        "format": {
          "ru": "историческая реконструкция"
        },
        "productionYear": 2015,
        "numberOfEpisodes": null,
        "productionDesigner": [
          {
            "ru": "Александр Якимов"
          },
          {
            "ru": "Рашель Пэлокен"
          }
        ],
        "directors": [
          {
            "ru": "Фредерик Тонолли"
          }
        ],
        "scenario": [
          {
            "ru": "Фредерик Тонолли"
          }
        ],
        "operator": [
          {
            "ru": "Дмитрий Киптилый"
          }
        ],
        "composer": [
          {
            "ru": "Евгений Петрусенко"
          },
          {
            "ru": "Жан-Мишель Дюньяш"
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
        "cast": []
      },
      "awards": [],
      "gallery": [
        {
          "url": "https://starmedia.expanse.systems/uploads/0ff8809e87fb3ac0a07ada71aa437a7d496a7351.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/82506e7966529ab21fd0aab68e5b5cab42145368.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/ba455a88a06cdee0d8515fa35a2dea5642aac11c.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/bfe9b8dd6635078e3230046ca3b06b8dc90078c2.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/c93005ec818fe9ef72e1e96f88e675220c14aa65.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/d7dc917fd4ca4abe55a9ab38692fc95d3ef9bc94.jpeg"
        },
        {
          "url": "https://starmedia.expanse.systems/uploads/d929a8745b3dc75633897ee4902caf73a9ab52b4.jpeg"
        }
      ],
      "tags": [],
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
