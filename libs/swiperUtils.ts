


export const getSlidesOffsetBefore = () => {
  try {
    if (typeof window !== undefined && document) {
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
