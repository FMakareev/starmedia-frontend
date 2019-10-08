import {DocumentNode} from "graphql";
import {useTranslation} from "react-i18next";
import {useQuery} from "@apollo/react-hooks";

type UseLocalizationQueryProps = {
  ru: DocumentNode,
  en: DocumentNode,
  uk: DocumentNode,
}

export const useLocalizationQuery = <T>(
  {
    ru,
    en,
    uk,
  }: UseLocalizationQueryProps,
  options?: any,
) => {
  const {i18n} = useTranslation();
  let query: DocumentNode = ru;
  switch (i18n.language) {
    case('en'): {
      query = en;
      break;
    }
    case('uk'): {
      query = uk;
      break;
    }
  }

  return useQuery<T>(query, options);
};
