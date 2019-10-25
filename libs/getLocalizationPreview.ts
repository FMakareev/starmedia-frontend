export const getLocalizationPreview = (
  {
    previewEn,
    previewRu,
    previewUk,
    preview,
  }: any,
  language: string,
) => {
  console.log('getLocalizationPreview: ', previewEn,
    previewRu,
    previewUk, language);
  if (language === 'ru') {
    return previewRu && previewRu.url || preview && preview.url
  }
  if (language === 'en') {
    return previewEn && previewEn.url || preview && preview.url
  }
  if (language === 'uk') {
    return previewUk && previewUk.url || preview && preview.url
  }
  return previewRu.url
};
