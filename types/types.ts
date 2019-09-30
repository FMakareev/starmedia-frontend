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
  video?: Maybe<File>;
}

export type Award = {
  __typename?: "Award";
  name?: Maybe<LocalizedString>;
  date?: Maybe<Scalars["String"]>;
  description?: Maybe<LocalizedString>;
  shortDescription?: Maybe<LocalizedString>;
  content?: Maybe<LocalizedString>;
};

export type Project = {
  __typename?: "Project";
  title?: Maybe<LocalizedString>;
  description?: Maybe<LocalizedString>;
  preview?: Maybe<File>;
  trailer?: Maybe<Video>;
  projectInfo?: Maybe<ProjectInfo>;
  awards?: Maybe<Array<Maybe<Award>>>;
  gallery?: Maybe<Array<Maybe<File>>>;
  tags?: Maybe<Array<Tag>>;
  similarProject?: Maybe<Array<Maybe<Project>>>;
};

export type ProjectInfo = {
  __typename?: "ProjectInfo";
  genre?: Maybe<LocalizedString>;
  format?: Maybe<LocalizedString>;
  productionYear?: Maybe<LocalizedString>;
  numberOfEpisodes?: Maybe<LocalizedString>;
  directors?: Maybe<LocalizedString>;
  scenario?: Maybe<LocalizedString>;
  operator?: Maybe<LocalizedString>;
  composer?: Maybe<LocalizedString>;
  producer?: Maybe<LocalizedString>;
  castr?: Maybe<LocalizedString>;
};

export type Tag = {
  __typename?: "Tag";
  name?: Maybe<LocalizedString>;
};


export type Contacts = {
  __typename?: "Contacts";
  mainContacts?: MainContact[],
  gpsPoints?: Maybe<Array<GpsPoint>>,
  roles?: Maybe<Array<Role>>,
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
  email?: LocalizedString,
  phone?: LocalizedString
  company?: LocalizedString,
  position?: LocalizedString
}


export  type MainContact = {
  __typename?: "MainContact";
  locale?: Maybe<String>;
  name?: Maybe<LocalizedString>;
  addresses?: Maybe<Array<LocalizedString>>,
  phones?: Maybe<Array<LocalizedString>>,
  emails?: Maybe<Array<LocalizedString>>,
}
