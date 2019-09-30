//xs
// sm
// md
// lg

/**
 * @param aliases
 * @return
 * @desc
 * */
export const createIndent = (aliases: string[], baseClass?: string) => (props: any) => {
  let result: any = {};
  const mediaQueryMap: string[] = ['', 'sm-', 'md-', 'lg-'];

  aliases.forEach((alias) => {
    if (props[alias]) {
      if (Array.isArray(props[alias])) {
        mediaQueryMap.forEach((media: string, index: number) => {
          if (index < props[alias].length) {
            result[`${baseClass || alias}-${media}${props[alias][index]}`] = true;
          }
        })
      } else {
        result = {
          [`${baseClass || alias}-${props[alias]}`]: true,
          ...result,
        }
      }
    }
  });
  return result;

};


export const createIndentMargin = createIndent(['mt', 'mr', 'mb', 'ml', 'm']);
export const createIndentPadding = createIndent(['pt', 'pr', 'pb', 'pl', 'p']);

export const createTextAlign = (props: any) => {
  let result: any = {};
  const mediaQueryMap: string[] = ['', 'sm-', 'md-', 'lg-'];
  const alias: string = 'align';

  if (props[alias]) {
    if (Array.isArray(props[alias])) {
      mediaQueryMap.forEach((media: string, index: number) => {
        if (index < props[alias].length) {
          result[`text_align-${media}${props[alias][index]}`] = true;
        }
      })
    } else {
      result = {
        [`text_align-${props[alias]}`]: true,
        ...result,
      }
    }
  }

  return result;

};

