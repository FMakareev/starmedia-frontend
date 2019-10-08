import {format} from 'date-fns'


export const DateFormat = (date: string) => {

  try {
    return format(
      new Date(date),
      'dd.MM.yyyy'
    )
  } catch (e) {
    console.error(e);
    return '';
  }
};

export const DateFormatYear = (date: string) => {
  try {
    return format(
      new Date(date),
      'yyyy'
    )
  } catch (e) {
    console.error(e);
    return '';
  }
};
