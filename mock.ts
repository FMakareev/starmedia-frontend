import {Project, Award, Contacts, Cooperation} from "./types/types";

export  const Menu: any[] = [
  {
    href: '/projects',
    label: 'Проекты'
  },
  {
    href: '/news',
    label: 'Новости'
  },
  {
    href: '/about-us',
    label: 'О компании'
  },
  {
    href: '/services',
    label: 'Услуги'
  },
  {
    href: '/cooperation',
    label: 'Сотрудничество'
  },
  {
    href: '/contacts',
    label: 'Контакты'
  },
];







export const ProjectMock: Project = {
  title: {
    ru: 'А зори здесь тихие...',
  },
  description: {
    ru: 'Май 1942 года. В самый разгар Великой Отечественной Войны, вдалеке от линии фронта, у забытого богом разъезда фашисты выбрасывают десант с целью пробраться на Кировскую железную дорогу и Беломорско-Балтийский канал. Это не обычные солдаты-пехотинцы, это опытные, тренированные диверсанты, элита войск СС, «сверхлюди». А против них — старшина Васков и пятеро девчонок-зенитчиц. Казалось бы, бой местного значения, но на кону — стратегически важная транспортная артерия, соединяющая значимые центры страны. Смогут ли старшина и его хрупкие новобранцы предотвратить нацистскую диверсию, и какой ценой?',
  },
  tags: [
    {
      name: {
        ru: 'Фильм',
      },
    },
    {
      name: {
        ru: '12+',
      },
    },
    {
      name: {
        ru: 'HD',
      },
    },
  ],
  projectInfo: {
    genre: {
      ru: 'военно-историческая драма',
    },
    productionYear: {
      ru: '2015',
    },
    format: {
      ru: 'Фильм',
    },
    producer: {
      ru: 'Ренат Давлетьяров, Влад Ряшин',
    },
    numberOfEpisodes: {
      ru: null,
    },
    directors: {
      ru: 'Ренат Давлетьяров',
    },
    scenario: {
      ru: 'Юрий Коротков, Артем Виткин, Ренат Давлетьяров',
    },
    operator: {
      ru: 'Семен Яковлев',
    },
    composer: {
      ru: 'Роман Дормидошин',
    },
    castr: {
      ru: 'Петр Федоров, Анастасия Микульчина, Женя Малахова, Агния Кузнецова, Софья Лебедева, Кристина Асмус, Екатерина Вилкова',
    },
  }
};


export const ProjectsMock: Project[] = [
  {
    title: {
      ru: 'Городской романс',
    },
    projectInfo: {
      genre: {
        ru: 'мелодрама'
      },
    },
    preview: {
      url: 'http://www.starmediafilm.com/ru/poster/project/3/miskij_romans',
    }
  },
  {
    title: {
      ru: 'Другая',
    },
    projectInfo: {
      genre: {
        ru: 'драма'
      },
    },
    preview: {
      url: 'http://www.starmediafilm.com/ru/poster/project/370/insha',
    }
  },
  {
    title: {
      ru: 'Чужая жизнь',
    },
    projectInfo: {
      genre: {
        ru: 'драма'
      },
    },
    preview: {
      url: 'http://www.starmediafilm.com/ru/poster/project/345/chuzhe_zhittya',
    }
  },
  {
    title: {
      ru: 'Принцип удовольствия',
    },
    projectInfo: {
      genre: {
        ru: ' триллер, детектив'
      },
    },
    preview: {
      url: 'http://www.starmediafilm.com/ru/poster/project/369/princip_nasolodi',
    }
  },
  {
    title: {
      ru: 'Сердце матери',
    },
    projectInfo: {
      genre: {
        ru: 'мелодрама'
      },
    },
    preview: {
      url: 'http://www.starmediafilm.com/ru/poster/project/355/serce_materi',
    }
  }, {
    title: {
      ru: 'Городской романс',
    },
    projectInfo: {
      genre: {
        ru: 'мелодрама'
      },
    },
    preview: {
      url: 'http://www.starmediafilm.com/ru/poster/project/3/miskij_romans',
    }
  },
  {
    title: {
      ru: 'Другая',
    },
    projectInfo: {
      genre: {
        ru: 'драма'
      },
    },
    preview: {
      url: 'http://www.starmediafilm.com/ru/poster/project/370/insha',
    }
  },
  {
    title: {
      ru: 'Чужая жизнь',
    },
    projectInfo: {
      genre: {
        ru: 'драма'
      },
    },
    preview: {
      url: 'http://www.starmediafilm.com/ru/poster/project/345/chuzhe_zhittya',
    }
  },
  {
    title: {
      ru: 'Принцип удовольствия',
    },
    projectInfo: {
      genre: {
        ru: ' триллер, детектив'
      },
    },
    preview: {
      url: 'http://www.starmediafilm.com/ru/poster/project/369/princip_nasolodi',
    }
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


export const ContactsMock: Contacts = {
  mainContacts: [
    {
      locale: 'ru',
      name: {
        ru: 'Москва',
      },
      addresses: [
        {
          ru: '109382, ул. Нижние Поля, 31, стр. 1',
        },
        {
          ru: '127474, Дмитровское ш., 60, пом. 6',
        },
      ],
      phones: [
        {
          ru: '+7 499 356-54-00',
        },
        {
          ru: '+7 499 356-47-00',
        },
      ],
      emails: [
        {
          ru: 'office@starmediafilm.com',
        },
        {
          ru: 'office@starmediafilm.com',
        },
      ],
    },
    {
      locale: 'uk',
      name: {
        ru: 'Киев',
      },
      addresses: [
        {
          ru: '02222, ул. Закревского, 22',
        },
      ],
      phones: [
        {
          ru: '+38 (044) 390-50-60',
        },
      ],
      emails: [
        {
          ru: 'info@starmediafilm.com',
        },
      ],
    },
    {
      locale: 'en',
      name: {
        ru: 'Лондон',
      },
      addresses: [
        {
          ru: 'SW1H 0HW, 83 Victoria Street',
        },
      ],
      phones: [
        {
          ru: '+44 (0) 20-3008-6555',
        },
      ],
      emails: [
        {
          ru: '(факс) +44 (0) 20-3008-6180',
        },
      ],
    },
  ],
  gpsPoints: [
    {
      // Москва, ул. Нижние Поля, 31, стр. 1
      lat: '55.65632225',
      lng: '37.73053030506042',
    },
    {
      // 127474, Дмитровское ш., 60, пом. 6
      lat: '55.8528765',
      lng: '37.567404',
    },
  ],
  roles: [
    {
      name: {
        ru: 'Департамент международных проектов',
      },
      persons: [
        {
          name: {ru: 'Мария Гречишникова'},
          position: {ru: 'Вице-президент по продажам и международным проектам'},
          email: {ru: 'm.grechishnikova@starmediafilm.com'},
          phone: {ru: '+7 915 123-45-67,  +7 499 356-54-00 (доб. 1224)'},
        },
        {
          name: {ru: 'Мария Гречишникова'},
          position: {ru: 'Вице-президент по продажам и международным проектам'},
          email: {ru: 'm.grechishnikova@starmediafilm.com'},
          phone: {ru: '+7 915 123-45-67,  +7 499 356-54-00 (доб. 1224)'},
        },
      ]
    },
    {
      name: {
        ru: 'Департамент международных проектов',
      },
      persons: [
        {
          name: {ru: 'Мария Гречишникова'},
          position: {ru: 'Вице-президент по продажам и международным проектам'},
          email: {ru: 'm.grechishnikova@starmediafilm.com'},
          phone: {ru: '+7 915 123-45-67,  +7 499 356-54-00 (доб. 1224)'},
        },
        {
          name: {ru: 'Мария Гречишникова'},
          position: {ru: 'Вице-президент по продажам и международным проектам'},
          email: {ru: 'm.grechishnikova@starmediafilm.com'},
          phone: {ru: '+7 915 123-45-67,  +7 499 356-54-00 (доб. 1224)'},
        },
      ]
    },
    {
      name: {
        ru: 'Департамент международных проектов',
      },
      persons: [
        {
          name: {ru: 'Мария Гречишникова'},
          position: {ru: 'Вице-президент по продажам и международным проектам'},
          email: {ru: 'm.grechishnikova@starmediafilm.com'},
          phone: {ru: '+7 915 123-45-67,  +7 499 356-54-00 (доб. 1224)'},
        },
        {
          name: {ru: 'Мария Гречишникова'},
          position: {ru: 'Вице-президент по продажам и международным проектам'},
          email: {ru: 'm.grechishnikova@starmediafilm.com'},
          phone: {ru: '+7 915 123-45-67,  +7 499 356-54-00 (доб. 1224)'},
        },
      ]
    },
  ]
}

//
//
//


export const CooperationMock: Cooperation = {
  actors: {
    form: {
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
