import {News, NewsPagination} from "./newsTypes";
import {Project, ProjectPagination} from "./projectTypes";
import {Award} from "./awardsTypes";

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

export enum SocialEnum {
  t = 't',
  imdb = 'imdb',
  vk = 'vk',
  ok = 'ok',
  fb = 'fb',
  gp = 'gp',
  yt = 'yt',
}


export enum AppLanguages {
  ru = 'ru',
  en = 'en',
  uk = 'uk'
}

export type LocalizedString = {
  __typename?: "LocalizedString";
  [AppLanguages.en]?: Maybe<Scalars["String"]>;
  [AppLanguages.ru]?: Maybe<Scalars["String"]>;
  [AppLanguages.uk]?: Maybe<Scalars["String"]>;
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
  emails?: Array<Scalars["String"]>,
  phones?: Array<Scalars["String"]>,
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
  index: string,
  email: string,
  phone: string,
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
  GET_PRESENTATION = "formPresentation",
  FREE_TESTING = "formTesting"
}

export type Forms = {
  id?: string,
  type?: Maybe<FormEnum>,
  name?: Maybe<LocalizedString>,
  description?: Maybe<LocalizedString>,
}


export type Protection = {
  name?: Maybe<LocalizedString>,
  content?: Maybe<LocalizedString>,
  contacts?: Maybe<Array<MainContact>>,
  formTesting?: Maybe<Array<Forms>>,
  formPresentation?: Maybe<Array<Forms>>,
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
  twitterImageAlt?: LocalizedString,
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
  title?: LocalizedString,
  form?: Forms,
}


export type HomePage = {
  watchOnline: string,
  mainSection: MainSection,
  aboutUsSection: AboutUsSection,
  orderCatalog: OrderCatalog,
  seoTags: SeoTags
}

export interface GetHomePage extends NewsPagination, ProjectPagination {
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
  redBabble?: LocalizedString,
  titleTVBroadcast?: LocalizedString,
  titleTVBroadcastBabbles?: [AboutUsBabble],
}


export type GetAboutUs = {
  getAboutUsPage: AboutUs;
}


export type PaginationPageInfo = {
  currentPage?: number,
  limit: number,
  nextPage?: number,
  prevPage?: number,
}

export type PaginationVariables = {
  limit: number,
  page: number,
}

export interface SearchPaginationVariable extends PaginationVariables {
  query: string,
}

export type SearchPagination = {
  search?: {
    projects?: {
      __typename: "ProjectPagination"
      pageInfo?: PaginationPageInfo,
      count: number,
      items: Project[],
    },
    news?: {
      __typename: "NewsPagination"
      pageInfo?: PaginationPageInfo,
      count: number,
      items: News[],
    },
    awards?: {
      __typename: "AwardPagination"
      pageInfo?: PaginationPageInfo,
      count: number,
      items: Award[],
    }
  }
}


export type FeedbackInput = {
  form?: String,
  name?: String,
  email?: String,
  phone?: String,
  city?: String,
  url?: String,
  file?: String,
  date?: String,
}
export type SendFeedbackVariables = {
  feedback: FeedbackInput
}

export type SendFeedback = {
  answer: String
}
