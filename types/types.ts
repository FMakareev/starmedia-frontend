export type Maybe<T> = T | null;
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export enum ViewportSizeEnum {
  'xs' = 'xs',
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
  'xl' = 'xl'
}

export enum ButtonElementEnum {
  link = 'link',
  primary = 'primary',
  circle = 'circle',
  tab = 'tab',
  transparent = 'transparent',
}

export type LocalizedString = {
  __typename?: "LocalizedString";
  en?: Maybe<Scalars["String"]>;
  ru?: Maybe<Scalars["String"]>;
  uk?: Maybe<Scalars["String"]>;
};

export enum SocialLinkTypeEnum {
  ok = 'ok',
  in = 'in',
  facebook = 'facebook',
  vk = 'vk',
  youtube = 'youtube',
  twitter = 'twitter',
}

export type SocialLink = {
  __typename?: "SocialLink";
  url?: Scalars["String"];
  icon?: SocialLinkTypeEnum;
  name?: Scalars["String"];
  shortName?: Scalars["String"];
};
export type IRelation = {}
export type File = {
  __typename?: "SocialLink";
  ext?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  mime?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  related?: Maybe<Array<IRelation>>;
  sha256?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  url?: Maybe<Scalars["String"]>;
  updated?: Maybe<Scalars["String"]>;
  created?: Maybe<Scalars["String"]>;
}

export type Video = {
  preview?: Maybe<File>;
  video?: Scalars["String"];
}


export type GetAward = {
  getAward: Award;
}


export type Award = {
  __typename?: "Award";
  seoTags?: SeoTags,
  name?: Maybe<LocalizedString>;
  date?: Scalars["String"];
  slug?: Maybe<Scalars["String"]>;
  description?: Maybe<LocalizedString>;
  shortDescription?: Maybe<LocalizedString>;
  content?: Maybe<LocalizedString>;
};

export type Project = {
  __typename?: "Project";
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<LocalizedString>;
  description?: Maybe<LocalizedString>;
  preview?: Maybe<File>;
  trailer?: Maybe<Video>;
  projectInfo?: Maybe<ProjectInfo>;
  awards?: Maybe<Array<Award>>;
  gallery?: Maybe<Array<File>>;
  tags?: Maybe<Array<Tag>>;
  similarProject?: Array<Project>;
};

export type ProjectInfo = {
  __typename?: "ProjectInfo";
  genre?: Maybe<LocalizedString>;
  format?: Maybe<LocalizedString>;
  productionYear?: Maybe<LocalizedString>;
  numberOfEpisodes?: Maybe<Scalars["Int"]>;
  directors?: Maybe<LocalizedString>;
  scenario?: Maybe<LocalizedString>;
  operator?: Maybe<LocalizedString>;
  composer?: Maybe<LocalizedString>;
  producer?: Maybe<LocalizedString>;
  cast?: Maybe<LocalizedString>;
};

export type ProjectPage = {
  project: Project,
  seoTags: SeoTags,
}

export type GetProjectPage = {
  getProject: ProjectPage,
}

export type Tag = {
  __typename?: "Tag";
  name?: Maybe<LocalizedString>;
};


export type GetContacts = {
  getContacts: Contacts
}
export type Contacts = {
  __typename?: "Contacts";
  mainContacts?: MainContact[],
}

export type GpsPoint = {
  __typename?: "GpsPoint";
  lat?: Maybe<String>,
  lng?: Maybe<String>
}

export type Role = {
  __typename?: "Role";
  name?: Maybe<LocalizedString>;
  persons?: Person[];
}

export type Person = {
  __typename?: "Person";
  name?: LocalizedString,
  email?: Scalars["String"],
  phone?: Scalars["String"],
  company?: LocalizedString,
  position?: LocalizedString
}

export type MainContact = {
  __typename?: "MainContact";
  locale?: Maybe<String>;
  name?: Maybe<LocalizedString>;
  addresses?: Maybe<Array<Address>>,
  phones?: Maybe<Array<Scalars["String"]>>,
  emails?: Maybe<Array<Scalars["String"]>>,
  departaments: Array<Departament>,
}

export type Departament = {
  __typename?: "Departament";
  name: Maybe<LocalizedString>,
  persons: Maybe<Array<Person>>
}


export type Address = {
  __typename?: "Address";
  gpsPoints: Maybe<GpsPoint>,
  addresses: Maybe<LocalizedString>

}

export type GetCooperation = {
  getCooperation: Cooperation;
}

export type Cooperation = {
  __typename?: "Cooperation";
  actors?: Maybe<Actors>,
  scripts?: Maybe<Scripts>,
  director?: Maybe<Director>
}


export type Actors = {
  form?: Maybe<Forms>,
  name?: Maybe<LocalizedString>,
  description?: Maybe<LocalizedString>
}
export type Scripts = {
  form?: Maybe<Forms>,
  name?: Maybe<LocalizedString>,
  description?: Maybe<LocalizedString>
}

export type Director = {
  form?: Maybe<Forms>,
  name?: Maybe<LocalizedString>,
  description?: Maybe<LocalizedString>
}


export enum FormEnum {
  GET_PRESENTATION = "GET_PRESENTATION",
  FREE_TESTING = "FREE_TESTING"
}

export type Forms = {
  type?: Maybe<FormEnum>,
  name?: Maybe<LocalizedString>,
  description?: Maybe<LocalizedString>,
}


export type Protection = {
  name?: Maybe<LocalizedString>,
  content?: Maybe<LocalizedString>,
  contacts?: Maybe<Array<MainContact>>,
  forms?: Maybe<Array<Forms>>,
  presentation?: Maybe<File>,
}
export type VehicleRental = {
  name: LocalizedString,
  content: LocalizedString,
  contacts: MainContact,
  icon: File
}
export type EquipmentRental = {
  name: LocalizedString,
  content: LocalizedString,
  contacts: MainContact,
  icon: File
}

export type SeilzHouse = {
  name: LocalizedString,
  content: LocalizedString,
  contacts: MainContact,
  icon: File
}

export type CostumeRental = {
  name: LocalizedString,
  content: LocalizedString,
  contacts: MainContact,
  icon: File
}

export type RentalPremises = {
  name?: LocalizedString,
  content?: LocalizedString,
  contacts?: MainContact,
  icon?: File
}

export type SeoTags = {
  __typename?: "SeoTags";
  description?: LocalizedString,
  keywords?: LocalizedString
  title?: LocalizedString

  ogUrl?: LocalizedString,
  ogImage?: LocalizedString,
  ogType?: LocalizedString,
  ogTitle?: LocalizedString,

  twitterImage?: LocalizedString,
  twitterImage_alt?: LocalizedString,
  twitterTitle?: LocalizedString,
  twitterDescription?: LocalizedString,
  twitterSite?: LocalizedString,
  twitterCard?: LocalizedString

  [prop: string]: any;
}


export type Services = {
  __typename?: "Services";
  protection?: Protection,
  vehicleRental?: VehicleRental,
  equipmentRental?: EquipmentRental,
  seilzHouse?: SeilzHouse,
  costumeRental?: CostumeRental,
  rentalPremises?: RentalPremises,
  seoTags?: SeoTags,
  [prop: string]: any
}

export type GetServices = {
  getServices?: Maybe<Services>;
}

export type PrivacyPolicyPage = {
  title?: LocalizedString,
  content?: LocalizedString,
  seoTags?: SeoTags
}

export type GetPrivacyPolicy = {
  getPrivacyPolicy: PrivacyPolicyPage

}


export type AboutUsSection = {
  title?: LocalizedString,
  backgroudVideo?: Video,
}


export type MainSection = {
  title?: LocalizedString,
  animatedText?: [LocalizedString],
}

export type OrderCatalog = {
  title: LocalizedString,
  form: String,
}


export type HomePage = {
  mainSection: MainSection,
  aboutUsSection: AboutUsSection,
  orderCatalog: OrderCatalog,
  seoTags: SeoTags
}

export type GetHomePage = {
  getHomePage: HomePage
}


export type AboutUsBabble = {
  title: LocalizedString,
  content: LocalizedString,
}

export type AboutUs = {
  seoTags?: SeoTags,
  title?: LocalizedString,
  content?: LocalizedString,
  redBubble?: LocalizedString,
  titleTVBroadcast?: LocalizedString,
  titleTVBroadcastBabbles?: [AboutUsBabble],
}


export type GetAboutUs = {
  getAboutUs: AboutUs;
}
