import {Cooperation, FormEnum} from "./types/types";
import {Award} from "./types/awardsTypes";

export  const Menu: any[] = [
  {
    href: '/projects',
    label: 'nav-project-list'
  },
  {
    href: '/news',
    label: 'nav-news'
  },
  {
    href: '/about-us',
    label: 'nav-about_us'
  },
  {
    href: '/services',
    label: 'nav-services'
  },
  // {
  //   href: '/cooperation',
  //   label: 'nav-cooperation'
  // },
  {
    href: '/contacts',
    label: 'nav-contacts'
  },
];



export const AwardMock: Award[] = [
  {
    name: {
      ru: 'Главный приз в конкурсе «International Gold Panda Awards for TV Drama»',
    },
    date: '2007'
  },
  {
    name: {
      ru: 'Главный приз в конкурсе «International Gold Panda Awards for TV Drama»',
    },
    date: '2007'
  },
  {
    name: {
      ru: 'Главный приз в конкурсе «International Gold Panda Awards for TV Drama»',
    },
    date: '2007'
  },
  {
    name: {
      ru: 'Главный приз в конкурсе «International Gold Panda Awards for TV Drama»',
    },
    date: '2007'
  },
  {
    name: {
      ru: 'Главный приз в конкурсе «International Gold Panda Awards for TV Drama»',
    },
    date: '2007'
  },
]



export const CooperationMock: Cooperation = {
  actors: {
// @ts-ignore
    forms: {
      type: FormEnum.GET_PRESENTATION,
      name: {ru: ''},
      description: {
        ru: '',
      },
    },
    name: {
      ru: 'Прием актерских портфолио',
    },
    description: {
      ru: `<p>Кастинг актеров и моделей для съемок в полнометражных и короткометражных художественных фильмах, документальных фильмах, телевизионных фильмах и сериалах.</p>`,
    },
  },
  scripts: {
    form: {
      name: {
        ru: ''
      },
      description: {
        ru: ''
      },
    },
    name: {
      ru: 'Прием сценарных заявок',
    },
    description: {
      ru: `<p> Компания «Star Media» приглашает к постоянному сотрудничеству сценаристов, драматургов, писателей, журналистов, литературных работников, студентов литературных и кинематографических ВУЗов, а также авторов без специального образования. Сотрудничество может носить как долговременный, так и разовый характер.</p><h4> Форма предоставления проектов </h4> <p> Готовый сценарий </br> Сценарная заявка </br> Синопсис </br> Аннотация (1-2 страницы, где изложена общая идея и основной сюжет) </br> </p> <h4> Жанры </h4> <p> Мелодрама </br> Комедия </br> Детектив </br> Криминальная драма </br> Авантюрно-приключенческий триллер </br> </p>`
    },
  },
  director: {
    form: {
      name: {ru: ''},
      description: {ru: ''},
    },
    name: {
      ru: 'Прием режисерских портфолио',
    },
    description: {
      ru: '<p>Краткое описание, условия, требования и т.д.</p>',
    },
  },
}

/**

 * */
