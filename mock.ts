import {Project, Award} from "./types/types";

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


// type MainContact {
// 	locale: String
// 	name: LocalizedString,
// 	addresses: [LocalizedString],
// 	phones: [LocalizedString],
// 	emails: [LocalizedString]
// }

//type Contacts {
// 	main_contacts: [MainContact],
// 	gps_points: [GpsPoint],
// 	roles: [Role]
// }

export const Contacts = {
  main_contacts: [
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
  ],
  gps_points: [],
  roles: [
    {

    },
  ]
}

