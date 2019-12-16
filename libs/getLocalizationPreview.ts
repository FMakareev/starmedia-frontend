import {LocalizationPreview, Maybe, ResponsiveImage} from "../types/types";


export const getLocalizationPreview = (
  {
    previewEn,
    previewRu,
    previewUk,
    preview,
  }: LocalizationPreview,
  language: string,
): Maybe<ResponsiveImage> => {

  if (language === 'ru' && previewRu) {
    return previewRu
  }
  if (language === 'en' && previewEn) {
    return previewEn
  }
  if (language === 'uk' && previewUk) {
    return previewUk
  }
  return preview || null;
};
