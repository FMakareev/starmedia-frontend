import {isBrowser} from "./isBrowser/isBrowser";


export const getSlidesOffsetBefore = () => {
  try {
    if (isBrowser) {
      if(window.innerWidth >= 1200){
        return 0;
      }
      return 16;
    }
  } catch (e) {
    console.log(e);
    return 16;
  }
};
