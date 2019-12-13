import {useTranslation} from "react-i18next";

export const GetLocalizationString = (string: any, _i18n?: any) => {
  let i18n = null;
  if(!_i18n){
    const trans = useTranslation();
    i18n = trans.i18n;
  } else {
    i18n = _i18n;
  }
  if (!string) {
    return null;
  }
  return string && string[i18n.language] ? string[i18n.language] : null;
};



export const ArrayIsLocalizationString = (array: any[], _i18n?: any) => {
  if(Array.isArray(array)){
    for(let i = 0; i < array.length; i += 1){
      if(!!(GetLocalizationString(array[i], _i18n))){
        return true;
      } else {
        return false
      }
    }
  }
  return false
};
